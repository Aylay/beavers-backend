import type { Attribute, Schema } from '@strapi/strapi';

export interface ClientAvis extends Schema.Component {
  collectionName: 'components_client_avis';
  info: {
    description: '';
    displayName: 'avis';
  };
  attributes: {
    commentaire: Attribute.RichText;
    nom: Attribute.String;
    note: Attribute.Integer & Attribute.Required;
    prenom: Attribute.String;
  };
}

export interface CommonContentManager extends Schema.Component {
  collectionName: 'components_common_content_managers';
  info: {
    description: '';
    displayName: 'contentManager';
  };
  attributes: {
    citation: Attribute.Text;
    ctaLabel: Attribute.String;
    IA: Attribute.Boolean & Attribute.DefaultTo<false>;
    iframe: Attribute.Text;
    img: Attribute.Media<'images'>;
    layout: Attribute.Enumeration<
      [
        'texte + texte',
        'texte + image',
        'image + texte',
        'texte',
        'image',
        'iframe',
        'citation'
      ]
    > &
      Attribute.Required;
    legend: Attribute.RichText;
    link: Attribute.String;
    text1: Attribute.RichText;
    text2: Attribute.RichText;
  };
}

export interface CommonTexts extends Schema.Component {
  collectionName: 'components_common_texts';
  info: {
    displayName: 'texts';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface LayoutMeta extends Schema.Component {
  collectionName: 'components_layout_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    ogImage: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface UseCaseBigSmallTexts extends Schema.Component {
  collectionName: 'components_use_case_big_small_texts';
  info: {
    displayName: 'bigSmallTexts';
  };
  attributes: {
    text1: Attribute.String;
    text2: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'client.avis': ClientAvis;
      'common.content-manager': CommonContentManager;
      'common.texts': CommonTexts;
      'layout.meta': LayoutMeta;
      'use-case.big-small-texts': UseCaseBigSmallTexts;
    }
  }
}
