/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { FormStoreOutput, FormStoreInput, FormMetadata } from './schema';
/**
 * Representation of the 'StoreFormsApi'.
 * This API is part of the 'CF_ADSRestAPI' service.
 */
export const StoreFormsApi = {
  /**
   * Retrieve all forms. Use query params to filter the result.
   * @param queryParameters - Object containing the following keys: limit, offset, select.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  formsGet: (queryParameters?: {
    limit?: number;
    offset?: number;
    select?: string[];
  }) =>
    new OpenApiRequestBuilder<FormStoreOutput[]>('get', '/v1/forms', {
      queryParameters
    }),
  /**
   * Create a form first to store templates and schema.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  formPost: (body: FormStoreInput) =>
    new OpenApiRequestBuilder<FormMetadata>('post', '/v1/forms', {
      body
    }),
  /**
   * Retrieve a form using 'formName' path param. Use query params to filter the result.
   * @param formName - Name of a form.
   * @param queryParameters - Object containing the following keys: select.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  formGet: (formName: string, queryParameters?: { select?: string[] }) =>
    new OpenApiRequestBuilder<FormStoreOutput>('get', '/v1/forms/{formName}', {
      pathParameters: { formName },
      queryParameters
    }),
  /**
   * Update a form using 'formName' path param.
   * @param formName - Name of a form.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  formPut: (formName: string, body: FormStoreInput) =>
    new OpenApiRequestBuilder<FormMetadata>('put', '/v1/forms/{formName}', {
      pathParameters: { formName },
      body
    }),
  /**
   * Delete a form including all related files, templates and schema.
   * @param formName - Name of a form.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  formDelete: (formName: string) =>
    new OpenApiRequestBuilder<string>('delete', '/v1/forms/{formName}', {
      pathParameters: { formName }
    })
};
