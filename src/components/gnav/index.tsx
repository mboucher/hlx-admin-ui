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

import React, { useEffect } from 'react';
import { Flex, View,Heading } from '@adobe/react-spectrum';
import { hlxClient } from '~/utils/hlx';


const GNav = () => {

    const client = new hlxClient();

    const getProfile = async () => {
        const profile = await client.getProfile();
        console.log(profile);
    }

    useEffect(()=> {
        getProfile();
    },[])

    return (
        <Flex direction='row' alignItems='center' height='100%' width='100%'>
            <Flex direction='row' gap='size-100' >
                <View paddingStart='size-200' alignSelf='center'>
                    <img src={require('./icon.svg')} width='28' height='28'></img>
                </View>
                <View colorVersion={5}>
                    <Heading>Marcel's AEM Franklin Admin UI</Heading>
                </View>
            </Flex>
            <View>

            </View>
            
        </Flex>
    )
}


export default GNav;