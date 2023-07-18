'use strict';

/**
 * job controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::job.job', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const job = await strapi.entityService.findMany("api::job.job", query);

    const sanitizedEntity = await this.sanitizeOutput(job);

    return this.transformResponse(sanitizedEntity[0]);
  }
}))
