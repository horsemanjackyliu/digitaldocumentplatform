/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SchemaMetadata } from './schema-metadata';
import type { FileVersionInfo } from './file-version-info';
/**
 * Representation of the 'SchemaStoreOutput' schema.
 */
export type SchemaStoreOutput =
  | {
      metaData?: SchemaMetadata;
      note?: string;
      schemaName?: string;
      versions?: FileVersionInfo[];
      /**
       * Schema file encoded as Base64 string
       * Default: "Base64 String".
       */
      xsdSchema?: string;
    }
  | Record<string, any>;
