/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Form JSON Input.<br /><br /><br />**FormName Options:** `Optional` Limited to 30 characters. Only alphanumeric characters allowed and '_' character.<br /><br />**Description Options:**  `Optional` Limited to 280 characters.<br /><br />**Note Options:** `Optional` Limited to 280 characters.
 */
export type FormStoreInput =
  | {
      /**
       * Max Length: 280.
       */
      description?: string;
      /**
       * Form naming restricted to unicode letters or digits.
       * Max Length: 30.
       */
      formName: string;
      /**
       * Max Length: 280.
       */
      note?: string;
    }
  | Record<string, any>;
