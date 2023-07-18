'use strict';

/**
 * candidature controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::candidature.candidature', () => ({
  async create(ctx) {
    const response = await super.create(ctx);

    const { WebClient, LogLevel } = require("@slack/web-api");
    const client = new WebClient(process.env.STRAPI_XOXB, {
      logLevel: LogLevel.DEBUG
    });

    const channelId = "C05HJFCKH32";

    let blocks = []
    const blockFirst = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": '*' + response.data.attributes.createdAt.substring(0,10) + '* : Nouvelle candidature pour le job : ' + response.data.attributes.jobTitle
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": '*' + response.data.attributes.firstName + ' ' + response.data.attributes.lastName + '*'
        }
      }
    ]
    blocks.push.apply(blocks, blockFirst);

    if (response.data.attributes.phone !== '') {
      const blockPhone = {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": '*Téléphone :* ' + response.data.attributes.phone
        }
      }
      blocks.push(blockPhone)
    }

    const blocksOther = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": '*Email :* ' + response.data.attributes.email
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": '*LinkedIn :* ' + response.data.attributes.linkedIn
        }
      }
    ]
    blocks.push.apply(blocks, blocksOther);

    if (response.data.attributes.portfolio !== '') {
      const blockPortfolio = {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": '*Portfolio :* ' + response.data.attributes.portfolio
        }
      }
      blocks.push(blockPortfolio)
    }

    if (response.data.attributes.cv !== '') {
      const blockCV = {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": '*CV et Lettre de motivation :* ' + response.data.attributes.cv
        }
      }
      blocks.push(blockCV)
    }

    if (response.data.attributes.message !== '') {
      const blockMessage = {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": '*Message :* ' + response.data.attributes.message
        }
      }
      blocks.push(blockMessage)
    }

    try {
      await client.chat.postMessage({
        channel: channelId,
        text: 'Nouvelle candidature',
        blocks: blocks,
        mrkdwn: true
      });
    }
    catch (error) {
      console.error(error);
    }
  }
}))

