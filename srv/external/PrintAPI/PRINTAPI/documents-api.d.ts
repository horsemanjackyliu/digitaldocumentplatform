/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'DocumentsApi'.
 * This API is part of the 'PRINTAPI' service.
 */
export declare const DocumentsApi: {
  /**
   * You can use the following request to send the business document to a particular print queue that is created in SAP  Print service. You can specify information, for example, numberOfCopies, username, etc. Maximum document size is 1 MB.
   * @param body - document file
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createDmApiV1RestPrintDocuments: (body: any) => OpenApiRequestBuilder<any>;
};
