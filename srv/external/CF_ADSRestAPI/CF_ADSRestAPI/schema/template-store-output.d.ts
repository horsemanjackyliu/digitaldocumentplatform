/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { TemplateMetadata } from './template-metadata';
import type { FileVersionInfo } from './file-version-info';
/**
 * Representation of the 'TemplateStoreOutput' schema.
 */
export type TemplateStoreOutput =
  | {
      businessArea?: string;
      businessDepartment?: string;
      description?: string;
      language?: string;
      locale?: string;
      masterLanguage?: string;
      metaData?: TemplateMetadata;
      note?: string;
      templateName?: string;
      versions?: FileVersionInfo[];
      /**
       * Template file encoded as Base64 string
       * Default: "Base64 String".
       */
      xdpTemplate?: string;
    }
  | Record<string, any>;
