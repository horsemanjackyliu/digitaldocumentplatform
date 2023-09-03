/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { FormMetadata } from './form-metadata';
import type { SchemaStoreOutput } from './schema-store-output';
import type { TemplateStoreOutput } from './template-store-output';
/**
 * Representation of the 'FormStoreOutput' schema.
 */
export type FormStoreOutput =
  | {
      description?: string;
      formName?: string;
      metaData?: FormMetadata;
      note?: string;
      schema?: SchemaStoreOutput;
      templates?: TemplateStoreOutput[];
    }
  | Record<string, any>;
