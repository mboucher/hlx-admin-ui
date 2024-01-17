/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 *
 **************************************************************************/
import { RepositoryParams } from "~/types/aem";

const baseURL:string = 'https://admin.hlx.page';

export class hlxClient {
    constructor() {

    }
    async getStatus() {
        const res = await fetch(`${baseURL}/status`);
        return await res.json();
    }

    async getProfile() {
        const res = await fetch(`${baseURL}/profile`);
        return await res.json();
    }
    authenticate() {

    }
}