import type { Attribute, Schema } from '@strapi/strapi';

export interface EbookPageCtaSection extends Schema.Component {
  collectionName: 'components_ebook_page_cta_sections';
  info: {
    displayName: 'CTA Section';
    icon: 'code';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
  };
}

export interface EbookPageFaqSection extends Schema.Component {
  collectionName: 'components_ebook_page_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'code';
  };
  attributes: {
    answer: Attribute.Text & Attribute.Required;
    question: Attribute.String & Attribute.Required;
  };
}

export interface EbookPageHeadingSection extends Schema.Component {
  collectionName: 'components_ebook_page_heading_sections';
  info: {
    displayName: 'Heading Section';
    icon: 'code';
  };
  attributes: {
    banner: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
  };
}

export interface EbookPageMetadata extends Schema.Component {
  collectionName: 'components_ebook_page_metadata';
  info: {
    displayName: 'Metadata';
    icon: 'cube';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface EbookPageRatingSection extends Schema.Component {
  collectionName: 'components_ebook_page_rating_sections';
  info: {
    displayName: 'Rating Section';
    icon: 'code';
  };
  attributes: {
    feedbackDescription: Attribute.Text & Attribute.Required;
    nameClient: Attribute.String & Attribute.Required;
    rate: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<5>;
  };
}

export interface EbookPageTeachingPathSection extends Schema.Component {
  collectionName: 'components_ebook_page_teaching_path_section_s';
  info: {
    displayName: 'Teaching Path Section ';
    icon: 'code';
  };
  attributes: {
    topic: Attribute.String & Attribute.Required;
  };
}

export interface EbookPageTopic extends Schema.Component {
  collectionName: 'components_ebook_page_topics';
  info: {
    displayName: 'Topic';
    icon: 'code';
  };
  attributes: {
    description: Attribute.String & Attribute.Required;
  };
}

export interface EbookPageWillLearnSection extends Schema.Component {
  collectionName: 'components_ebook_page_will_learn_sections';
  info: {
    description: '';
    displayName: 'Will Learn Section';
    icon: 'code';
  };
  attributes: {
    coverEbook: Attribute.Media<'images'> & Attribute.Required;
    topics: Attribute.Component<'ebook-page.topic', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ebook-page.cta-section': EbookPageCtaSection;
      'ebook-page.faq-section': EbookPageFaqSection;
      'ebook-page.heading-section': EbookPageHeadingSection;
      'ebook-page.metadata': EbookPageMetadata;
      'ebook-page.rating-section': EbookPageRatingSection;
      'ebook-page.teaching-path-section': EbookPageTeachingPathSection;
      'ebook-page.topic': EbookPageTopic;
      'ebook-page.will-learn-section': EbookPageWillLearnSection;
    }
  }
}
