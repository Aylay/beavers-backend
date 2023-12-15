'use strict';

/**
 * agence service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::agence.agence');
