'use strict';

/**
 * sample-one service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sample-one.sample-one');
