/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * Representation of the 'PrintQueueDTO' schema.
 */
export type PrintQueueDTO =
  | {
      /**
       * @example "pq01"
       */
      qname?: string;
      /**
       * @example "Example Print Queue"
       */
      qdescription?: string;
      /**
       * @example "R"
       */
      qstatus?: string;
      /**
       * @example "PDF"
       */
      qformat?: string;
      /**
       * @example 1
       */
      cleanupPrd?: number;
      /**
       * @example "tech_user"
       */
      techUserName?: string;
      /**
       * @example "user_name"
       */
      creator?: string;
      /**
       * Creation date
       * @example "2017-01-01"
       * Format: "date".
       * Pattern: "YYYY-MM-DD".
       */
      createdOn?: string;
    }
  | Record<string, any>;
