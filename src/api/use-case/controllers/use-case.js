'use strict';

/**
 * use-case controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::use-case.use-case');

module.exports = createCoreController('api::use-case.use-case', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      populate: ['client', 'meta'],
      ...ctx.query,
    };

    const useCases = await strapi.entityService.findMany("api::use-case.use-case", query);

    return this.transformResponse(useCases[0]);
  }
}))

