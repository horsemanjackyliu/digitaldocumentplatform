/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { PrintTask } from './schema';
/**
 * Representation of the 'PrintTasksApi'.
 * This API is part of the 'PRINTAPI' service.
 */
export declare const PrintTasksApi: {
  /**
   * You can use the following request to send the business document to the particular print queue that is created in SAP Print service. You can specify information, for example, numberOfCopies, username, etc.
   * @param itemId - The itemId should be the same as any one of objectKey in body. Once one objectKey is chosen as itemId, it will be considered as the main document during Print Queue Item creation, the rest of objectKey will be considered as the attachments which will be associated to that main document.
   * @param body - This API is used to create a print task. The field itemId should be identical to one of the documentId from printContents. The documentId should be created successfully via API /dm/api/v1/rest/print-documents. The field qname should be included in the response of API qm/api/v1/rest/queues. If you want to print the attached document that is associated with the specific main document, the documentName should include the extension, for example, attachment.pdf.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateQmApiV1RestPrintTasksByItemId: (
    itemId: string,
    body: PrintTask
  ) => OpenApiRequestBuilder<any>;
};
