"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreFormsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'StoreFormsApi'.
 * This API is part of the 'CF_ADSRestAPI' service.
 */
exports.StoreFormsApi = {
    /**
     * Retrieve all forms. Use query params to filter the result.
     * @param queryParameters - Object containing the following keys: limit, offset, select.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    formsGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/forms', {
        queryParameters
    }),
    /**
     * Create a form first to store templates and schema.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    formPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/forms', {
        body
    }),
    /**
     * Retrieve a form using 'formName' path param. Use query params to filter the result.
     * @param formName - Name of a form.
     * @param queryParameters - Object containing the following keys: select.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    formGet: (formName, queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/forms/{formName}', {
        pathParameters: { formName },
        queryParameters
    }),
    /**
     * Update a form using 'formName' path param.
     * @param formName - Name of a form.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    formPut: (formName, body) => new openapi_1.OpenApiRequestBuilder('put', '/v1/forms/{formName}', {
        pathParameters: { formName },
        body
    }),
    /**
     * Delete a form including all related files, templates and schema.
     * @param formName - Name of a form.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    formDelete: (formName) => new openapi_1.OpenApiRequestBuilder('delete', '/v1/forms/{formName}', {
        pathParameters: { formName }
    })
};
//# sourceMappingURL=store-forms-api.js.map