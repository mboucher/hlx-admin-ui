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
 **************************************************************************/

import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app';


const store = configureStore({
    reducer: {
        app:appReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store;
