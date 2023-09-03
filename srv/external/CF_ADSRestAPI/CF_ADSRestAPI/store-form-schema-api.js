"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreFormSchemaApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'StoreFormSchemaApi'.
 * This API is part of the 'CF_ADSRestAPI' service.
 */
exports.StoreFormSchemaApi = {
    /**
     * Store a schema of a form.
     * @param formName - Name of a form.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    schemaPost: (formName, body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/forms/{formName}/schema', {
        pathParameters: { formName },
        body
    }),
    /**
     * Read a schema of a form.
     * @param formName - Name of a form.
     * @param schemaName - Name of a schema.
     * @param queryParameters - Object containing the following keys: select, isObjectId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    schemaGet: (formName, schemaName, queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/forms/{formName}/schema/{schemaName}', {
        pathParameters: { formName, schemaName },
        queryParameters
    }),
    /**
     * Update a schema of a form.
     * @param formName - Name of a form.
     * @param schemaName - Name of a schema.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: isObjectId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    schemaPut: (formName, schemaName, body, queryParameters) => new openapi_1.OpenApiRequestBuilder('put', '/v1/forms/{formName}/schema/{schemaName}', {
        pathParameters: { formName, schemaName },
        body,
        queryParameters
    }),
    /**
     * Delete a schema of a form using.
     * @param formName - Name of a form.
     * @param schemaName - Name of a schema.
     * @param queryParameters - Object containing the following keys: allVersions, isObjectId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    schemaDelete: (formName, schemaName, queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/v1/forms/{formName}/schema/{schemaName}', {
        pathParameters: { formName, schemaName },
        queryParameters
    })
};
//# sourceMappingURL=store-form-schema-api.js.map