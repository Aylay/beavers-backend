'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/indexnow',
      handler: 'indexnow.trigger',
      config: {
        auth: false,
      },
    },
  ],
};