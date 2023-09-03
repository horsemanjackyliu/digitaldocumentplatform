/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PrintContent } from './print-content';
/**
 * Representation of the 'PrintTask' schema.
 */
export type PrintTask =
  | {
      /**
       * @example 1
       */
      numberOfCopies?: number;
      /**
       * @example "test user"
       */
      username?: string;
      /**
       * @example "pq01"
       */
      qname?: string;
      /**
       * @example "Defaults"
       */
      profileName?: string;
      metadata?:
        | {
            business_metadata?:
              | {
                  /**
                   * @example "user1"
                   */
                  business_user?: string;
                  /**
                   * @example "object_node_1"
                   */
                  object_node_type?: string;
                }
              | Record<string, any>;
            /**
             * @example 1.2
             */
            version?: number;
          }
        | Record<string, any>;
      /**
       * @example [
       *   {
       *     "objectKey": "0adcfcae-4119-4225-b031-3d5718165798",
       *     "documentName": "main document name"
       *   },
       *   {
       *     "objectKey": "0adcfcae-4119-4225-b031-3d5718165854",
       *     "documentName": "attachment_document_one.pdf"
       *   },
       *   {
       *     "objectKey": "0adcfcae-4119-4225-b031-3d5718165123",
       *     "documentName": "attachment_document_two.pdf"
       *   },
       *   {
       *     "objectKey": "0adcfcae-4119-4225-b031-3d5718165234",
       *     "documentName": "attachment_document_three.pdf"
       *   }
       * ]
       */
      printContents?: PrintContent[];
    }
  | Record<string, any>;
