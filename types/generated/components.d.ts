import type { Schema, Attribute } from '@strapi/strapi';

export interface ClientAvis extends Schema.Component {
  collectionName: 'components_client_avis';
  info: {
    displayName: 'avis';
    description: '';
  };
  attributes: {
    prenom: Attribute.String;
    nom: Attribute.String;
    note: Attribute.Integer & Attribute.Required;
    commentaire: Attribute.RichText;
  };
}

export interface CommonContentManager extends Schema.Component {
  collectionName: 'components_common_content_managers';
  info: {
    displayName: 'contentManager';
    description: '';
  };
  attributes: {
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
    text1: Attribute.RichText;
    text2: Attribute.RichText;
    img: Attribute.Media;
    iframe: Attribute.Text;
    legend: Attribute.RichText;
    citation: Attribute.Text;
    IA: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.String;
    ctaLabel: Attribute.String;
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
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    ogImage: Attribute.Media;
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
