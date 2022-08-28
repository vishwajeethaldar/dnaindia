import { Box, SkeletonCircle, SkeletonText, Text} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { getNews } from '../../api/api';
import { ACTIONTYPES } from '../../Context/actiontypes';
import { AppContext } from '../../Context/AppContext'

import { Card } from './Card';

export const Sports = () => {
    const {state, dispatch} =  useContext(AppContext);
    const [data, setData] =  useState([])
    useEffect(()=>{
        dispatch({type:ACTIONTYPES.GET_DATA_REQUESTED})
        getNews('/sports').then((res)=>{
            setData(res.data)
            dispatch({type:ACTIONTYPES.PROCCESS_COMPLETED});
          }).catch((err)=>{
            console.log(err);
          })
          return ()=>setData([]);
    },[])

  return (
    
    <SkeletonText isLoaded={!state.isDataLoading}>
        
        <Box as={'h1'} bg="#eee" py="5px"  my="10px" pl="10px"fontSize={['1.2em', '1.4em', '2.8em']} borderBottom="'1px solid #000" mb="5px"> Sports </Box>        
        <Box>
            <Card data={data} link="/sports" text="More Sports news"/>
        </Box>
    </SkeletonText>
  )
}
