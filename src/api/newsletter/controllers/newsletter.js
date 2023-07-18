'use strict';

/**
 * newsletter controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::newsletter.newsletter', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);

    await strapi
    .plugin('email')
    .service('email')
    .send({
      to: response.data.attributes.email,
      from: 'marie-claire@beavers-agency.fr',
      subject: "Confirmation d'inscription à la newsletter Beavers",
      html: `<!DOCTYPE html><html lang=fr xmlns=http://www.w3.org/1999/xhtml xmlns:o=urn:schemas-microsoft-com:office:office xmlns:v=urn:schemas-microsoft-com:vml><title></title><!--[if !mso]><!--><meta content="IE=edge"http-equiv=X-UA-Compatible><!--<![endif]--><meta content="text/html; charset=UTF-8"http-equiv=Content-Type><meta content="width=device-width,initial-scale=1"name=viewport><style>#outlook a{padding:0}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0}img{border:0;height:auto;line-height:100%;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}p{display:block;margin:13px 0}</style><!--[if mso]><noscript><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml></noscript><![endif]--><!--[if lte mso 11]><style>.mj-outlook-group-fix{width:100%!important}</style><![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"rel=stylesheet><style>@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@40);600&display=swap);</style><!--<![endif]--><style>@media only screen and (min-width:480px){.mj-column-per-100{width:100%!important;max-width:100%}.mj-column-per-50{width:50%!important;max-width:50%}}</style><style media="screen and (min-width:480px)">.moz-text-html .mj-column-per-100{width:100%!important;max-width:100%}.moz-text-html .mj-column-per-50{width:50%!important;max-width:50%}</style><style>@media only screen and (max-width:480px){table.mj-full-width-mobile{width:100%!important}td.mj-full-width-mobile{width:auto!important}}</style><style></style><meta content=light name=color-scheme><meta content=light name=supported-color-schemes><meta content="white light"name=theme-color media="(prefers-color-scheme: light)"><meta content="white light"name=theme-color media="(prefers-color-scheme: dark)"><body style=word-spacing:normal;background-color:#0b0211><div style=background-color:#0b0211 lang=fr><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation style=width:640px width=640 align=center><tr><td style=line-height:0;font-size:0;mso-line-height-rule:exactly><![endif]--><div style="margin:0 auto;max-width:640px"><table border=0 cellpadding=0 cellspacing=0 role=presentation style=width:100% align=center><tr><td style="direction:ltr;font-size:0;padding:40px 10px 50px;text-align:center"><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation><tr><td style=vertical-align:top;width:620px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100% class="mj-outlook-group-fix mj-column-per-100"><table border=0 cellpadding=0 cellspacing=0 role=presentation style=vertical-align:top width=100%><tr><td style=font-size:0;padding:0;word-break:break-word align=center><table border=0 cellpadding=0 cellspacing=0 role=presentation style=border-collapse:collapse;border-spacing:0><tr><td style=width:150px><img height=auto src=https://beavers-agency.fr/newsletter/logo-beavers-transparent-blanc.png style=border:0;display:block;outline:0;text-decoration:none;height:auto;width:100%;font-size:13px width=150></table></table></div><!--[if mso | IE]><![endif]--></table></div><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation style=width:640px width=640 align=center><tr><td style=line-height:0;font-size:0;mso-line-height-rule:exactly><![endif]--><div style="margin:0 auto;max-width:640px"><table border=0 cellpadding=0 cellspacing=0 role=presentation style=width:100% align=center><tr><td style="direction:ltr;font-size:0;padding:0 40px;text-align:center"><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation><tr><td style=vertical-align:top;width:560px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100% class="mj-outlook-group-fix mj-column-per-100"><table border=0 cellpadding=0 cellspacing=0 role=presentation style=vertical-align:top width=100%><tr><td style="font-size:0;padding:0 0 25px 0;word-break:break-word"align=left><div style=font-family:Montserrat,Arial;font-size:18px;line-height:22px;text-align:left;color:#FFF>Bonjour,<br><br>Merci pour votre <span style=font-weight:700;color:#8013BD>inscription à notre newsletter mensuelle</span>.<br>Vous n'êtes plus qu'à un clic de confirmer votre inscription #RGPD !</div></table></div><!--[if mso | IE]><![endif]--></table></div><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation style=width:640px width=640 align=center><tr><td style=line-height:0;font-size:0;mso-line-height-rule:exactly><![endif]--><div style="margin:0 auto;max-width:640px"><table border=0 cellpadding=0 cellspacing=0 role=presentation style=width:100% align=center><tr><td style="direction:ltr;font-size:0;padding:0 40px 20px;text-align:center"><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation><tr><td style=vertical-align:top;width:280px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100% class="mj-outlook-group-fix mj-column-per-50"><table border=0 cellpadding=0 cellspacing=0 role=presentation style=vertical-align:top width=100%><tr><td style="font-size:0;padding:10px 25px;word-break:break-word"align=center vertical-align=middle><table border=0 cellpadding=0 cellspacing=0 role=presentation style=border-collapse:separate;line-height:100%><tr><td style="border:2px solid #00FFDA;border-radius:30px;cursor:auto;mso-padding-alt:10px 25px;background:#00FFDA"align=center bgcolor=#00FFDA role=presentation valign=middle><a href=https://beavers-agency.fr/newsletter-confirmation?uid=${response.data.attributes.uid} style="display:inline-block;background:#00FFDA;color:#000;font-family:Montserrat,Arial;font-size:16px;font-weight:700;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0;border-radius:30px"target=_blank>Je confirme</a></table></table></div><!--[if mso | IE]><td style=vertical-align:top;width:280px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100% class="mj-outlook-group-fix mj-column-per-50"><table border=0 cellpadding=0 cellspacing=0 role=presentation style=vertical-align:top width=100%><tr><td style="font-size:0;padding:10px 25px;word-break:break-word"align=center vertical-align=middle><table border=0 cellpadding=0 cellspacing=0 role=presentation style=border-collapse:separate;line-height:100%><tr><td style="border:2px solid #00FFDA;border-radius:30px;cursor:auto;mso-padding-alt:10px 25px;background:0 0"align=center bgcolor=transparent role=presentation valign=middle><a href=https://beavers-agency.fr/newsletter-refus?uid=${response.data.attributes.uid} style="display:inline-block;background:0 0;color:#00FFDA;font-family:Montserrat,Arial;font-size:16px;font-weight:700;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0;border-radius:30px"target=_blank>Je refuse</a></table></table></div><!--[if mso | IE]><![endif]--></table></div><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation style=width:640px width=640 align=center><tr><td style=line-height:0;font-size:0;mso-line-height-rule:exactly><![endif]--><div style="margin:0 auto;max-width:640px"><table border=0 cellpadding=0 cellspacing=0 role=presentation style=width:100% align=center><tr><td style="direction:ltr;font-size:0;padding:20px 20px 0;text-align:center"><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation><tr><td style=vertical-align:top;width:600px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100% class="mj-outlook-group-fix mj-column-per-100"><table border=0 cellpadding=0 cellspacing=0 role=presentation style=vertical-align:top width=100%><tr><td style="font-size:0;padding:20px 0;word-break:break-word"align=center><div style=font-family:Montserrat,Arial;font-size:12px;line-height:16px;text-align:center;color:#FFF>Vous recevez cet e-mail car vous avez fait une demande d'inscription à notre newsletter mensuelle.<br>Beavers - 853 663 334</div></table></div><!--[if mso | IE]><![endif]--></table></div><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation style=width:640px width=640 align=center><tr><td style=line-height:0;font-size:0;mso-line-height-rule:exactly><![endif]--><div style="margin:0 auto;max-width:640px"><table border=0 cellpadding=0 cellspacing=0 role=presentation style=width:100% align=center><tr><td style="direction:ltr;font-size:0;padding:0 20px 40px;text-align:center"><!--[if mso | IE]><table border=0 cellpadding=0 cellspacing=0 role=presentation><tr><td style=vertical-align:top;width:600px><![endif]--><div style=font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100% class="mj-outlook-group-fix mj-column-per-100"><table border=0 cellpadding=0 cellspacing=0 role=presentation style=vertical-align:top width=100%><tr><td style=font-size:0;padding:0;word-break:break-word align=center><div style=font-family:Montserrat,Arial;font-size:12px;line-height:16px;text-align:center;color:#FFF><a href=https://beavers-agency.fr/politique-rgpd style=color:#FFF;text-decoration:none;font-size:12px;line-height:16px;margin-left:10px;display:inline-block>Politique RGPD</a></div></table></div><!--[if mso | IE]><![endif]--></table></div><!--[if mso | IE]><![endif]--></div>`,
    });
  },

  async findOne(ctx) {
    const { uid } = ctx.params;

    const query = {
      filters: { uid },
      ...ctx.query,
    };

    const newsletter = await strapi.entityService.findMany("api::newsletter.newsletter", query);

    const sanitizedEntity = await this.sanitizeOutput(newsletter);

    return this.transformResponse(sanitizedEntity[0]);
  },

  async update(ctx) {
    const response = await super.update(ctx);

    if (response.data.attributes.check) {
      const Brevo = require('@getbrevo/brevo');
  
      const defaultClient = Brevo.ApiClient.instance;
  
      // Configure API key authorization: api-key
      const apiKey = defaultClient.authentications['api-key'];
      apiKey.apiKey = "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"
  
      const apiInstance = new Brevo.ContactsApi();
  
      const listId = 3;

      apiInstance.getContactsFromList(listId).then(function(data) {
        const brevoEmails = data ? data.contacts : null
        if (brevoEmails) {
          if (!brevoEmails.some(elm => elm.email === response.data.attributes.email)) {
            let createContact = new Brevo.CreateContact();
            createContact.email = response.data.attributes.email;
            createContact.attributes = {
              'DOUBLE_OPT-IN': true,
              'OPT_IN': true
            }
            apiInstance.createContact(createContact).then(function() {
              let contactEmails = new Brevo.AddContactToList();
              contactEmails.emails = [response.data.attributes.email];
              apiInstance.addContactToList(listId, contactEmails).then(function(data) {
              }, function(error) {
                console.error(error);
              });
            }, function(error) {
              console.error(error);
            });
          }
        }
      }, function(error) {
        console.error(error);
      });
    }
  }
}))
