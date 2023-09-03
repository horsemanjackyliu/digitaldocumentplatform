"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreFormTemplatesApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'StoreFormTemplatesApi'.
 * This API is part of the 'CF_ADSRestAPI' service.
 */
exports.StoreFormTemplatesApi = {
    /**
     * Retrieve all templates of a form. Use query params to filter the result.
     * @param formName - Name of a form
     * @param queryParameters - Object containing the following keys: locale, language, templateName, masterLanguage, businessArea, businessDepartment, limit, offset, select.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    templatesGet: (formName, queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/forms/{formName}/templates', {
        pathParameters: { formName },
        queryParameters
    }),
    /**
     * Store a template of a form.
     * @param formName - Name of form
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    templatePost: (formName, body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/forms/{formName}/templates', {
        pathParameters: { formName },
        body
    }),
    /**
     * Read a template of a form using 'name' or 'objectId' path param.
     * @param formName - Name of a form.
     * @param templateName - Name of a template.
     * @param queryParameters - Object containing the following keys: select, isObjectId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    templateGet: (formName, templateName, queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/forms/{formName}/templates/{templateName}', {
        pathParameters: { formName, templateName },
        queryParameters
    }),
    /**
     * Update a template of a form using 'name' or 'objectId' path param.
     * @param formName - Name of a form.
     * @param templateName - Name of a template to be updated.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: isObjectId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    templatePut: (formName, templateName, body, queryParameters) => new openapi_1.OpenApiRequestBuilder('put', '/v1/forms/{formName}/templates/{templateName}', {
        pathParameters: { formName, templateName },
        body,
        queryParameters
    }),
    /**
     * Delete a template of a form using 'name' or 'objectId' path param.
     * @param formName - Name of a form.
     * @param templateName - Name of a template.
     * @param queryParameters - Object containing the following keys: allVersions, isObjectId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    templateDelete: (formName, templateName, queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/v1/forms/{formName}/templates/{templateName}', {
        pathParameters: { formName, templateName },
        queryParameters
    })
};
//# sourceMappingURL=store-form-templates-api.js.map