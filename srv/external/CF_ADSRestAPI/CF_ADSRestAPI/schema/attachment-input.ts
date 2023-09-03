/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * SetAttachment JSON. FileContent and PDF encoded in BASE64.
 */
export type AttachmentInput =
  | {
      description?: string;
      /**
       * File encoded as Base64 string
       * Default: "Base64 String".
       */
      fileContent: string;
      fileName: string;
      mimeType: string;
      /**
       * File encoded as Base64 string
       * Default: "Base64 String".
       */
      pdf: string;
    }
  | Record<string, any>;
