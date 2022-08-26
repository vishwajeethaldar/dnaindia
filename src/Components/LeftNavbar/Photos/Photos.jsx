import { Box, Stack} from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { getNews } from '../../../api/api'
import { ACTIONTYPES } from '../../../Context/actiontypes'
import { AppContext } from '../../../Context/AppContext'



import { BreadcrumbLeftNav } from '../../Utils/BreadcrumbLeftNav'
import {NewsItemCard} from '../../Utils/NewsItemCard'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
export const Photos = () => {
    const {state, dispatch} = useContext(AppContext);  
    
    useEffect(()=>{
      dispatch({type:ACTIONTYPES.GET_DATA_REQUESTED})
      getNews('/photos').then((res)=>{
        dispatch({type:ACTIONTYPES.GET_DATA_SUCCESS, payLoad:res.data});
      }).catch((err)=>{
        console.log(err);
      })
      return ()=>  dispatch({type:ACTIONTYPES.GET_DATA_SUCCESS, payLoad:[]});
    },[]);

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
          <Box>
              <BreadcrumbLeftNav current='/photos' curLinkName="Photos"/>
          </Box>
          <Box>
            <Box as="h2" borderBottom={'1px solid #ccc'} fontSize={['1.5em','1.2em','1.6em']}>
                PHOTOS
            </Box>
          </Box>
          <Box>
            
              {state.data && state.data.map((news)=>{
                    return (
                      <Box py="15px" px="5px" bg={`light`} mb="10px" borderRadius={`3px` } key={news.id}>
                        <NewsItemCard flexDir="column" imgWidth="100%" gap="10px" id={news.id} imgLink={news.thumnail} newsTitle={news.title} path='photos' textFont={['1em','1.1em','1.2em']}/>
                      </Box>
                    )
              })}
             
          </Box>
      </Stack>)

}
