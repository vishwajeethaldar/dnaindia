import { Box, Stack} from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { getNews } from '../../../api/api'
import { ACTIONTYPES } from '../../../Context/actiontypes'
import { AppContext } from '../../../Context/AppContext'



import { BreadcrumbLeftNav } from '../../Utils/BreadcrumbLeftNav'
import {NewsItemCard} from '../../Utils/NewsItemCard'

export const Videos = () => {

    const {state, dispatch} = useContext(AppContext);

    const HandleLatestNews = ()=>{
      getNews('/videos').then((res)=>{
        console.log(res.data);
        dispatch({type:ACTIONTYPES.GET_DATA_SUCCESS, payLoad:res.data});
      }).catch((err)=>{
        console.log(err);
      })
    }
  
    useEffect(()=>{
      HandleLatestNews();
    },[]);

    return (
      <Stack>
          <Box>
              <BreadcrumbLeftNav current='/videos' curLinkName="Videos"/>
          </Box>
          <Box>
            <Box as="h2" borderBottom={'1px solid #ccc'} fontSize={['1.5em','1.2em','1.6em']}>
                VIDEOS
            </Box>
          </Box>
          <Box>
            
              {state.data && state.data.map((news)=>{
                    return (
                      <Box py="15px" px="5px" bg={`light`} mb="10px" borderRadius={`3px` } key={news.id}>
                        <NewsItemCard flexDir="column" imgWidth="100%" gap="10px" id={news.id} imgLink={news.image} newsTitle={news.title} path='videos' textFont={['1em','1.1em','1.2em']}/>
                      </Box>
                    )
              })}
             
          </Box>
      </Stack>)

}
