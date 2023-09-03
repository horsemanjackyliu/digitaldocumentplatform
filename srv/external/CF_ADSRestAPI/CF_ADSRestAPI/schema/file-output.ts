/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'FileOutput' schema.
 */
export type FileOutput =
  | {
      /**
       * File encoded as Base64 string
       */
      fileContent?: string;
      /**
       * Name of the file
       */
      fileName?: string;
      /**
       * Added if TraceLevel > 0.
       */
      traceString?: string;
    }
  | Record<string, any>;
