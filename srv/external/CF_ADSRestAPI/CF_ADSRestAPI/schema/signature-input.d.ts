/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * SetSignature JSON. PDF encoded in BASE64.
 */
export type SignatureInput =
  | {
      contactInfo: string;
      credentialAlias: string;
      locationInfo: string;
      /**
       * File encoded as Base64 string
       * Default: "Base64 String".
       */
      pdf: string;
      reasonInfo: string;
      signatureFieldName: string;
    }
  | Record<string, any>;
