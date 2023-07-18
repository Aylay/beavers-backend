'use strict';

/**
 * contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);

    const { WebClient, LogLevel } = require("@slack/web-api");
    const client = new WebClient("xoxb-935577478768-5572702963187-4ija2HjBTCInL1Q77UQjbiDw", {
      logLevel: LogLevel.DEBUG
    });

    const channelId = "C05HJFCKH32";

    let blocks = []
    const blockFirst = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": '*' + response.data.attributes.createdAt.substring(0,10) + '* : Nouvelle demande de contact !'
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

    if (response.data.attributes.company !== '') {
      const blockCompany = {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": '*Société :* ' + response.data.attributes.company
        }
      }
      blocks.push(blockCompany)
    }

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
          "text": '*Message :* ' + response.data.attributes.message
        }
      }
    ]
    blocks.push.apply(blocks, blocksOther);

    try {
      await client.chat.postMessage({
        channel: channelId,
        text: 'Nouveau contact',
        blocks: blocks,
        mrkdwn: true
      });
    }
    catch (error) {
      console.error(error);
    }
  }
}))
