import React, { useContext, useEffect } from 'react'
import Header from '../Components/Header/Header';
import { TopnewsSlider } from '../Components/Topnews/TopnewsSlider';
import { AppContext } from '../Context/AppContext';
import { ACTIONTYPES } from '../Context/actiontypes';
import { Footer } from '../Components/Footer/Footer';
import {Skeleton,Stack,Grid, GridItem, Box} from '@chakra-ui/react'
import { LeftNavbar } from '../Components/LeftNavbar/LeftNavbar';
import { Sports } from '../Components/LeftNavbar/Sports/Sports';
import { LeftNav } from '../Components/LeftNavbar/LeftNav';
import { WorldNewsCard } from '../Components/LeftNavbar/World/WorldNewsCard';
import { SearchBtn } from '../Components/Header/SearchBtn';
import { LatestNewsSingleNews } from '../Components/LatestNews/LatestNewsSingleNews';

export const TopNewsPage = () => {
    const {state, dispatch} = useContext(AppContext);

    useEffect(()=>{
      dispatch({type:ACTIONTYPES.LOADING, payLoad:false})
    }, []);
  
    return (
      <Stack w="100%"  bg='#eedeee'>
       
        <Skeleton isLoaded={!state.isLoading}>
        <Header>
            <SearchBtn/>
            </Header>
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
  
              <GridItem>                  
                   <LatestNewsSingleNews linkname={'topnews'}/>
              </GridItem>

              <GridItem>
               
              </GridItem>
          </Grid>
        </Box>
  
  
        <Footer />
      </Stack>
    )
}
