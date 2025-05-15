'use strict';
const axios = require('axios');

const INDEXNOW_KEY = '3d7b78ca41ac4ae280c192f24909f889';
const SITE_URL = 'https://beavers-agency.fr';
const HOST = 'beavers-agency.fr';
const TIME_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

const MODELS = [
  {
    name: 'article',
    path: (entry) =>
      entry.category?.slug && entry.slug
        ? `/la-pause-cafe/${entry.category.slug}/${entry.slug}`
        : null,
    populate: ['category'],
  },
  {
    name: 'use-case',
    path: (entry) =>
      entry.slug ? `/cas/${entry.slug}` : null,
    populate: [],
  },
  {
    name: 'agence',
    path: (entry) =>
      entry.slug ? `/l-agence-beavers/${entry.slug}` : null,
    populate: [],
  },
];

module.exports = {
  async trigger(ctx) {
    const now = Date.now();
    const from = new Date(now - TIME_WINDOW_MS);

    let allUrls = [];

    for (const model of MODELS) {
      const entries = await strapi.entityService.findMany(`api::${model.name}.${model.name}`, {
        filters: {
          $or: [
            { updatedAt: { $gte: from } },
            { publishedAt: { $gte: from } },
          ],
          publishedAt: { $notNull: true },
        },
        populate: model.populate,
      });

      const urls = entries
        .map(entry => model.path(entry))
        .filter(Boolean)
        .map(path => `${SITE_URL}${path}`);

      allUrls = allUrls.concat(urls);
    }

    if (allUrls.length === 0) {
      return ctx.send({ message: 'Aucune URL à notifier.' }, 200);
    }

    try {
      await axios.post('https://api.indexnow.org/indexnow', {
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: allUrls,
      });

      return ctx.send({ message: 'IndexNow notified', urls: allUrls }, 200);
    } catch (error) {
      strapi.log.error('IndexNow webhook error:', error);
      return ctx.send({ error: 'Failed to notify IndexNow' }, 500);
    }
  }
};