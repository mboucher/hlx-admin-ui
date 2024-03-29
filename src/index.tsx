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

import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider as SpectrumProvider, lightTheme } from '@adobe/react-spectrum';
import { Provider as ReduxProvider } from "react-redux";
import store from './redux/store'
import App from './app';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <ReduxProvider store={store}>
        <SpectrumProvider theme={lightTheme} colorScheme="light" height="100%">
             <App/>
        </SpectrumProvider>
    </ReduxProvider>
);