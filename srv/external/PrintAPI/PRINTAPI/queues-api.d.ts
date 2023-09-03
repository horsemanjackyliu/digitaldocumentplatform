/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'QueuesApi'.
 * This API is part of the 'PRINTAPI' service.
 */
export declare const QueuesApi: {
  /**
   * You can use the following request to fetch the existing print queue from SAP  Print service. Afterwards, you can pick one and use it for the next API call, for example, create print task.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getQmApiV1RestQueues: () => OpenApiRequestBuilder<any>;
};
