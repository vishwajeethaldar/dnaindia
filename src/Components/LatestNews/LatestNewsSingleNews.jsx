import { AspectRatio, Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getSingleNews } from '../../api/api';
import { ACTIONTYPES } from '../../Context/actiontypes';
import { AppContext } from '../../Context/AppContext';
import {BreadcrumbLeftNav} from '../Utils/BreadcrumbLeftNav';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';


export const LatestNewsSingleNews = ({linkname}) => {
    const {state, dispatch} = useContext(AppContext);
    const location = useLocation()

    useEffect(()=>{
        dispatch({type:ACTIONTYPES.GET_DATA_REQUESTED});
        getSingleNews(location.pathname).then((res)=>{
            dispatch({type:ACTIONTYPES.GET_SINGLE_DATA_GET_DATA_SUCESS, payLoad:res.data})
        }).catch((err)=>{
            console.log('err');
        })
        // return ()=> dispatch({type:ACTIONTYPES.GET_SINGLE_DATA_GET_DATA_SUCESS, payLoad:{}})
    },[])

    useEffect(()=>{

        getSingleNews(location.pathname).then((res)=>{
            dispatch({type:ACTIONTYPES.GET_SINGLE_DATA_GET_DATA_SUCESS, payLoad:res.data})
        })
       
    }, [state.singleData])
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
            <BreadcrumbLeftNav current={location.pathname} curLinkName={state.singleData.category}/>
        </Box>

        <Box>
            <Box>
                <Text fontSize={['1em', '1.2em', '1.8em']} fontWeight="700" textAlign="justify" py="10px" >
                {state.singleData.title}
                </Text>
            </Box>

            <Box>
                <Text fontSize={['.9em', '1em', '1.2em']} fontWeight="300" textAlign="justify" py="10px" >
                {state.singleData.subtitle}
                </Text>
            </Box>

            <Box>
                <Flex direction={`column`} bg="darkblack">
                <Image src={state.singleData.image} />
                <Text px="10px" fontSize={['.9em', '1em', '1.2em']}  color="light"> {state.singleData.altText} </Text>
                </Flex>
            </Box>
            <Box>
                <Text pt="20px" fontSize={['1em', '1.1em', '1.3em']} pb="10px" textAlign={'justify'}>{state.singleData.des2 && state.singleData.des2} </Text>
                <Text fontSize={['1em', '1.1em', '1.3em']} pb="10px" textAlign={'justify'}>{state.singleData.des3 && state.singleData.des3} </Text>              
                
                <Text fontSize={['1em', '1.1em', '1.3em']} pb="10px" textAlign={'justify'}>{state.singleData.des4 && state.singleData.des4} </Text>
                <Text fontSize={['1em', '1.1em', '1.3em']} pb="10px" textAlign={'justify'}>{state.singleData.des5 && state.singleData.des5} </Text>
               { state.singleData.des1!==""?<Text fontSize={['1em', '1.1em', '1.3em']} pb="10px" textAlign={'justify'}>{state.singleData.des1} </Text>:""}
            </Box>
        </Box>
    </Stack>
  )
}
