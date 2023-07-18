'use strict';

/**
 * categorie controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::categorie.categorie', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      populate: ['articles', 'meta', 'words'],
      ...ctx.query,
    };

    const cat = await strapi.entityService.findMany("api::categorie.categorie", query);

    return this.transformResponse(cat[0]);
  }
}))

