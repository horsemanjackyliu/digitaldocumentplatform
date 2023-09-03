/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { PrintProfileDTOList } from './schema';
/**
 * Representation of the 'PrintProfileApi'.
 * This API is part of the 'PRINTAPI' service.
 */
export const PrintProfileApi = {
  /**
   * You can use this API to fetch and check the print profile information for each print queue, afterwards, it allows to specify the valid profileName for the particular print task via print-task API, and then, SAP Print service will directly pass those profile parameter to local physical printers. profileParams field is reserved to response the profile parameter detail, it is empty in current version, if you can have any reasonable use case which needs this data, please contact with us, our support component is BC-CCM-PRN-OM-SCP.
   * @param qname - The qname should be exist.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getQmApiV1RestQueuesProfilesByQname: (qname: string) =>
    new OpenApiRequestBuilder<PrintProfileDTOList | any>(
      'get',
      '/qm/api/v1/rest/queues/{qname}/profiles',
      {
        pathParameters: { qname }
      }
    )
};
