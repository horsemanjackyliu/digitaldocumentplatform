/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * Template JSON Input to update templates as part of a form entity. One form entity can have multiple templates.<br /><br /><br />**XdpTemplate Options:** `Optional` Template file encoded as BASE64 string.<br /><br />**TemplateName Options:** `Optional` Limited to 30 characters. Only alphanumeric characters allowed and '_' character.<br /><br />**Description Options:** `Optional` Limited to 280 characters.<br /><br />**Note Options:** `Optional` Limited to 280 characters.<br /><br />**Locale Options:** `Optional` Combination of ISO-639 language code and ISO-3166 country code (language_country).<br /><br />**MasterLanguage Options:** `Optional` Limited to 280 characters.<br /><br />**BusinessArea Options:** `Optional` Limited to 280 characters.<br /><br />**BusinessDepartment Options:**; `Optional` Limited to 280 characters.
 */
export type TemplateUpdateStoreInput =
  | {
      /**
       * Max Length: 280.
       */
      businessArea?: string;
      /**
       * Max Length: 280.
       */
      businessDepartment?: string;
      /**
       * Max Length: 280.
       */
      description?: string;
      /**
       * Locale must be 'language_country' according to ISO 639
       */
      locale?: string;
      /**
       * Max Length: 280.
       */
      masterLanguage?: string;
      /**
       * Max Length: 280.
       */
      note?: string;
      /**
       * Form naming restricted to unicode letters or digits.
       * Max Length: 30.
       */
      templateName: string;
      /**
       * Template file encoded as Base64 string
       * Default: "Base64 String".
       */
      xdpTemplate: string;
    }
  | Record<string, any>;
