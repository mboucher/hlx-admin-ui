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
import { 
    Flex, 
    View,  
    ActionButton, 
    Text,
    Heading
 } from '@adobe/react-spectrum';
import Erase from '@spectrum-icons/workflow/Erase';


const ToolBar = () => {

    const handleAction = (target:string) => {
        window.location.href=`/${target}`;
    }

    
    return(
        <View paddingStart='size-200'>
            <Flex direction='column' gap='size-150' alignItems='center'>
                <Heading>Actions</Heading>
                <ActionButton isQuiet onPress={() => handleAction('remove-background')}>
                    <Erase/>
                    <Text>Remove Background</Text>
                </ActionButton>


            </Flex>
        </View>
    );
}

export default ToolBar;