/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'PrintProfileDTO' schema.
 */
export type PrintProfileDTO =
  | {
      /**
       * @example "pq01"
       */
      queueName?: string;
      /**
       * @example "profile_01"
       */
      profileName?: string;
      profileParams?: string;
      /**
       * @example "OK"
       */
      profileStatus?: string;
    }
  | Record<string, any>;
