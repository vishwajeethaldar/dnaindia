import React, { useContext, useEffect, useState } from 'react'
import { ACTIONTYPES } from '../Context/actiontypes';
import { AppContext } from '../Context/AppContext'
import {Skeleton,Stack,Grid, GridItem, Box} from '@chakra-ui/react'

import { LeftNavbar } from '../Components/LeftNavbar/LeftNavbar';
import { LatestNews } from '../Components/LatestNews/LatestNews';
import { LeftNav } from '../Components/LeftNavbar/LeftNav';
import { Footer } from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { TopnewsSlider } from '../Components/Topnews/TopnewsSlider';
import { WorldNewsCard } from '../Components/LeftNavbar/World/WorldNewsCard';
import { NewsItemCard } from '../Components/Utils/NewsItemCard';
import { SearchBtn } from '../Components/Header/SearchBtn';

export const SearchResult = () => {
  const {state, dispatch, search, setSearch} = useContext(AppContext);

  useEffect(()=>{
  dispatch({type:ACTIONTYPES.LOADING, payLoad:false})

}, [])

  useEffect(()=>{
    console.log(state.searchData);
    return ()=> dispatch({type:ACTIONTYPES.SEARCH_DATA_SUCCESS, payLoad:{key:"", data:{}}})
  },[state.query])
 
  return (
    <Stack w="100%"  bg='#eedeee'>
     
      <Skeleton isLoaded={!state.isLoading}>
           <Header />
            
      </Skeleton>
      
      <Skeleton isLoaded={!state.isLoading}>
      <TopnewsSlider />
      </Skeleton>

    <Box w={'100%'} >
        <Grid  w={['98%', '90%', '90%']} mx='auto' templateColumns={['100%','100%','23% 50% 27%']}>
            <GridItem >
              <Skeleton isLoaded={!state.isLoading}>
                  <Box display={['block', 'block', 'none']}>
                    <LeftNav/>
                  </Box>
                  <Box display={['none', 'none', 'block']}>
                    <LeftNavbar />
                  </Box>
              </Skeleton>
              
            </GridItem>

           
            {!state.searchData.world?console.log("error"):(state.searchData.world.length===0&& state.searchData.india.length===0 &&state.searchData.sports.length===0&&state.searchData.business.length===0&&state.searchData.education.length===0)?console.log("in empty"): 
              
            <Skeleton isLoaded={state.searchData.world}>  
              <GridItem>                  
              {state.searchData.world&&state.searchData.world.map((item)=>{
                    return (
                      <Box key={item.id} bg='dimLight' h="100px" px="10px" py="10px" overflow={'hidden'}>
                        <NewsItemCard path="world" id={item.id} newsTitle={item.title} align={'center'} gap="10px" imgLink={item.image} imgWidth={'25%'}/>
                      </Box>
                    )
                  })}

                {state.searchData.india&&state.searchData.india.map((item)=>{
                    return (
                      <Box key={item.id}  bg='dimLight' h="100px" px="10px" py="10px" overflow={'hidden'}>
                        <NewsItemCard path="india" id={item.id} newsTitle={item.title} align={'center'} gap="10px" imgLink={item.image} imgWidth={'25%'}/>
                      </Box>
                    )
                  })}

                  {state.searchData.sports&&state.searchData.sports.map((item)=>{
                    return (
                      <Box key={item.id}  bg='dimLight' h="100px" px="10px" py="10px" overflow={'hidden'}>
                        <NewsItemCard path="sports" id={item.id} newsTitle={item.title} align={'center'} gap="10px" imgLink={item.image} imgWidth={'25%'}/>
                      </Box>
                    )
                  })}

              {state.searchData.business&&state.searchData.business.map((item)=>{
                    return (
                      <Box key={item.id}  bg='dimLight' h="100px" px="10px" py="10px" overflow={'hidden'}>
                        <NewsItemCard path="business" id={item.id} newsTitle={item.title} align={'center'} gap="10px" imgLink={item.image} imgWidth={'25%'}/>
                      </Box>
                    )
                  })}

                {state.searchData.education&&state.searchData.education.map((item)=>{
                    return (
                      <Box key={item.id}  bg='dimLight' h="100px" px="10px" py="10px" overflow={'hidden'}>
                        <NewsItemCard path="education" id={item.id} newsTitle={item.title} align={'center'} gap="10px" imgLink={item.image} imgWidth={'25%'}/>
                      </Box>
                    )
                  })}
              </GridItem>
            </Skeleton> 
            }

            <GridItem>
             
            </GridItem>
        </Grid>
      </Box> 
      <Footer />
    </Stack>
  )
}
