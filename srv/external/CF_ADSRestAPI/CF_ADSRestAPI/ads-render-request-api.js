"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADSRenderRequestApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ADSRenderRequestApi'.
 * This API is part of the 'CF_ADSRestAPI' service.
 */
exports.ADSRenderRequestApi = {
    /**
     * Post template and data files to render an interactive, dynamic interactive or print pdf object. TraceLevel set to 1 or 2 adds a [traceString] node to response JSON. In case of rendering errors, [errorPDF] node will be attached to the error response.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: templateSource, TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    renderingPdfPost: (body, queryParameters) => new openapi_1.OpenApiRequestBuilder('post', '/v1/adsRender/pdf', {
        body,
        queryParameters
    })
};
//# sourceMappingURL=ads-render-request-api.js.map