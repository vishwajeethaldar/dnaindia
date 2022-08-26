import { AspectRatio, Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getSingleNews } from '../../../api/api';
import { ACTIONTYPES } from '../../../Context/actiontypes';
import { AppContext } from '../../../Context/AppContext';
import {BreadcrumbLeftNav} from '../../Utils/BreadcrumbLeftNav';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

export const VideoItemCard = ({linkname}) => {

    const {state, dispatch} = useContext(AppContext);
    const location = useLocation()
    useEffect(()=>{
        dispatch({type:ACTIONTYPES.GET_DATA_REQUESTED})
        getSingleNews(location.pathname).then((res)=>{
            dispatch({type:ACTIONTYPES.GET_SINGLE_DATA_GET_DATA_SUCESS, payLoad:res.data})
            
        }).catch((err)=>{
            console.log('err');
        })
        return ()=> dispatch({type:ACTIONTYPES.GET_SINGLE_DATA_GET_DATA_SUCESS, payLoad:{}})
    },[])

    if(state.isLoading || state.isDataLoading){
        return (
            <Box padding='6' boxShadow='lg' bg='white' h="100%">
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' />
            </Box>
        )
    }
  return (
    
    <Stack>
        <Box >
            <BreadcrumbLeftNav current={location.pathname} curLinkName={linkname}/>
        </Box>

        <Box>
            <Box>
                <Text fontSize={['1em', '1.2em', '1.8em']} fontWeight="700" textAlign="justify" py="10px" >
                {state.singleData.title}
                </Text>
            </Box>

            <Box w="100%" h="350px" bg="darkblack">

            </Box>
            
            <Box>
                <Text fontSize={['.9em', '1em', '1.2em']} fontWeight="300" textAlign="justify" py="10px" >
                {state.singleData.des}
                </Text>
            </Box>      
        </Box>
    </Stack>
  )
}
