"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADSSetRequestsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ADSSetRequestsApi'.
 * This API is part of the 'CF_ADSRestAPI' service.
 */
exports.ADSSetRequestsApi = {
    /**
     * Attaches content to a pdf file. TraceLevel set to 1 or 2 adds a 'traceString' node to response JSON.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    pDfSetAttachmentPost: (body, queryParameters) => new openapi_1.OpenApiRequestBuilder('post', '/v1/pdf/adsSet/attachment', {
        body,
        queryParameters
    }),
    /**
     * Sets a signature to a pdf file. TraceLevel set to 1 or 2 adds a 'traceString' node to response JSON.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    pDfSetSignaturePost: (body, queryParameters) => new openapi_1.OpenApiRequestBuilder('post', '/v1/pdf/adsSet/signature', {
        body,
        queryParameters
    })
};
//# sourceMappingURL=ads-set-requests-api.js.map