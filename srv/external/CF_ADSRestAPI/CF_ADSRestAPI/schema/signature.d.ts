/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Certificate } from './certificate';
/**
 * Representation of the 'Signature' schema.
 */
export type Signature =
  | {
      certificates?: Certificate[];
      contactInfo?: string;
      date?: string;
      field?: string;
      legalAttestations?: string;
      location?: string;
      maxRevisions?: string;
      permissions?: string;
      reason?: string;
      revision?: string;
      signer?: string;
      status?: string;
    }
  | Record<string, any>;
