"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADSGetRequestsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ADSGetRequestsApi'.
 * This API is part of the 'CF_ADSRestAPI' service.
 */
exports.ADSGetRequestsApi = {
    /**
     * Create a request builder for execution of post requests to the '/v1/pdf/adsGet/attachments' endpoint.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    pDfGetAttachmentsPost: (body, queryParameters) => new openapi_1.OpenApiRequestBuilder('post', '/v1/pdf/adsGet/attachments', {
        body,
        queryParameters
    }),
    /**
     * Create a request builder for execution of post requests to the '/v1/pdf/adsGet/attachmentsList' endpoint.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    pDfListAttachmentsPost: (body, queryParameters) => new openapi_1.OpenApiRequestBuilder('post', '/v1/pdf/adsGet/attachmentsList', {
        body,
        queryParameters
    }),
    /**
     * Create a request builder for execution of post requests to the '/v1/pdf/adsGet/data' endpoint.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    pDfGetDataPost: (body, queryParameters) => new openapi_1.OpenApiRequestBuilder('post', '/v1/pdf/adsGet/data', {
        body,
        queryParameters
    }),
    /**
     * Create a request builder for execution of post requests to the '/v1/pdf/adsGet/signatures' endpoint.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    pDfGetSignaturePost: (body, queryParameters) => new openapi_1.OpenApiRequestBuilder('post', '/v1/pdf/adsGet/signatures', {
        body,
        queryParameters
    }),
    /**
     * Create a request builder for execution of post requests to the '/v1/template/adsGet/schema' endpoint.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    templateGetSchema: (body, queryParameters) => new openapi_1.OpenApiRequestBuilder('post', '/v1/template/adsGet/schema', {
        body,
        queryParameters
    })
};
//# sourceMappingURL=ads-get-requests-api.js.map