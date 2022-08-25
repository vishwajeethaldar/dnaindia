import { Box, Stack, VStack} from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { getNews } from '../../api/api'
import { ACTIONTYPES } from '../../Context/actiontypes'
import { AppContext } from '../../Context/AppContext'
import { BreadcrumbLeftNav } from '../Utils/BreadcrumbLeftNav'
import {NewsItemCard} from '../Utils/NewsItemCard'
export const LatestNews = () => {
  const {state, dispatch} = useContext(AppContext);
  const HandleLatestNews = ()=>{
    getNews('/latestnews').then((res)=>{
      dispatch({type:ACTIONTYPES.GET_DATA_SUCCESS, payLoad:res.data});
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    HandleLatestNews();
  },[])
  return (
    <Stack>
        <Box>
            <BreadcrumbLeftNav current='/latestnews' curLinkName="Latest News"/>
        </Box>
        <Box>
          <Box as="h2" borderBottom={'1px solid #ccc'} fontSize={['1.5em','1.2em','1.6em']}>
              LATEST NEWS
          </Box>
        </Box>
        <Box>
          
            {state.data && state.data.map((news)=>{
                  return (
                    <Box py="15px" px="5px" bg={`light`} mb="10px" borderRadius={`3px` } key={news.id}>
                      <NewsItemCard  imgWidth="150px" gap="10px" id={news.id} imgLink={news.image} newsTitle={news.title} path='latestnews' textFont={['1em','1.1em','1.2em']}/>
                    </Box>
                  )
            })}
           
        </Box>
    </Stack>

  )
}
