/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * List of Attachments
 */
export type AttachmentFile =
  | {
      /**
       * Creationdate of the file
       */
      creationDate?: string;
      /**
       * Description of the file
       */
      description?: string;
      /**
       * File encoded as Base64 string
       */
      fileContent?: string;
      /**
       * Name of the file
       */
      fileName?: string;
      /**
       * Id of the file
       */
      id?: string;
      /**
       * Mimetype of the file
       */
      mimeType?: string;
      /**
       * Modificationdate of the file
       */
      modificationDate?: string;
      /**
       * Size of the file
       */
      size?: string;
    }
  | Record<string, any>;
