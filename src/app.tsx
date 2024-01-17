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

import React from "react";
import {
    Flex, 
    View, 
    Provider, 
    darkTheme
} from '@adobe/react-spectrum';
import GNav from "./components/gnav";
import ToolBar from "./components/toolbar";
import './app.css';

const App = () => {

    return (
        <Flex direction="column" height='100%'>
            <View backgroundColor="gray-200" height="size-800">
                <Provider theme={darkTheme}>  
                    <GNav/>
                </Provider>
            </View>
            <Flex direction="row" height="100%" gap="size-100">
                <View width="size-2500">
                    <ToolBar/>
                </View>
                <View flex height='100%' backgroundColor='gray-200'>
                    
                </View>
            </Flex>
        </Flex>
    );
}

export default App;

