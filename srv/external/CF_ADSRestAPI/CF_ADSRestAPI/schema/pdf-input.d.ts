/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * PDF file encoded in BASE64.
 */
export type PDFInput =
  | {
      /**
       * File encoded as Base64 string
       * Default: "Base64 String".
       * Pattern: "^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$".
       */
      pdf: string;
    }
  | Record<string, any>;
