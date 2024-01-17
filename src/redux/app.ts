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

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:''
}

const AppSlice = createSlice({
    name:'App',
    initialState:initialState,
    reducers:{
        setToken(state, action){
            state.token = action.payload;
        },

    }
});

export const{
    setToken
} = AppSlice.actions;
export default AppSlice.reducer;