"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'DocumentsApi'.
 * This API is part of the 'PRINTAPI' service.
 */
exports.DocumentsApi = {
    /**
     * You can use the following request to send the business document to a particular print queue that is created in SAP  Print service. You can specify information, for example, numberOfCopies, username, etc. Maximum document size is 1 MB.
     * @param body - document file
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createDmApiV1RestPrintDocuments: (body) => new openapi_1.OpenApiRequestBuilder('post', '/dm/api/v1/rest/print-documents', {
        body
    })
};
//# sourceMappingURL=documents-api.js.map