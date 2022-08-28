import {  Box,  Image, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getSingleNews } from '../../../api/api';
import parse from 'html-react-parser';
import { ACTIONTYPES } from '../../../Context/actiontypes';
import { AppContext } from '../../../Context/AppContext';
import {BreadcrumbLeftNav} from '../../Utils/BreadcrumbLeftNav';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
export const ExplainerCard = ({linkname}) => {

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
}else{
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

            <Box>
                <Text fontSize={['.8em', '1.1em', '1.2em']} fontWeight="400" textAlign="justify" py="10px" >
                {state.singleData.subTitle}
                </Text>
            </Box>
            <Box>
                <Image src={state.singleData.image}/>
                <Text>{state.singleData.altText}</Text>
            </Box>
            
            <Box>
                <Text fontSize={['1.2em', '1.4em', '1.6em']} fontWeight="600" textAlign="justify" py="10px" >
                {state.singleData.des1Titel}
                </Text>
                <Text fontSize={['.9em', '1em', '1.2em']} fontWeight="300" textAlign="justify" py="10px" >
                {  parse(`${state.singleData.des1}`)}
                </Text>
                <Text fontSize={['1.2em', '1.4em', '1.6em']} fontWeight="600" textAlign="justify" py="10px" >
                {state.singleData.des2Titel}
                </Text>
                <Text fontSize={['.9em', '1em', '1.2em']} fontWeight="300" textAlign="justify" py="10px" >
                {parse(`${state.singleData.des2}`)}
                </Text>
                <Text fontSize={['1.2em', '1.4em', '1.6em']} fontWeight="600" textAlign="justify" py="10px" >
                {state.singleData.des3Titel}
                </Text>
                <Text fontSize={['.9em', '1em', '1.2em']} fontWeight="300" textAlign="justify" py="10px" >
                {parse(`${state.singleData.des3}`)}
                </Text>
                <Text fontSize={['1.2em', '1.4em', '1.6em']} fontWeight="600" textAlign="justify" py="10px" >
                {state.singleData.des4Titel}
                </Text>
                <Text fontSize={['.9em', '1em', '1.2em']} fontWeight="300" textAlign="justify" py="10px" >
                {/* {state.singleData.des4} */}
                {parse(`${state.singleData.des4}`)}
                </Text>
                <Text fontSize={['1.2em', '1.4em', '1.6em']} fontWeight="600" textAlign="justify" py="10px" >
                {state.singleData.des5Titel}
                </Text>
                <Text fontSize={['.9em', '1em', '1.2em']} fontWeight="300" textAlign="justify" py="10px" >
                {parse(`${state.singleData.des5}`)}
                </Text>
            </Box>      
        </Box>
    </Stack>
  )
}
}
