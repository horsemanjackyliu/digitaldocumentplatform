/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AttachmentFile } from './attachment-file';
/**
 * Representation of the 'AttachmentsOutput' schema.
 */
export type AttachmentsOutput =
  | {
      /**
       * List of Attachments
       */
      attachments?: AttachmentFile[];
      /**
       * Added if TraceLevel > 0.
       */
      traceString?: string;
    }
  | Record<string, any>;
