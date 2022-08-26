import { Box, Flex } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { getNews } from '../../api/api'
import { ACTIONTYPES } from '../../Context/actiontypes'
import { AppContext } from '../../Context/AppContext'
import { NewsItemCard } from '../Utils/NewsItemCard'

export const VideoCard = ({data=[]}) => {
    const {state, dispatch} = useContext(AppContext);

const [videData,setVideData] = useState([])

    useEffect(()=>{
        dispatch({type:ACTIONTYPES.GET_DATA_REQUESTED});

        getNews('/videos').then((res)=>{
            dispatch({type:ACTIONTYPES.PROCCESS_COMPLETED})
            setVideData(res.data);
        })
        return ()=>setVideData([]);
    },[])

  return (
    <Box  w="100%" border={'1px solid #f93'}>
        <Flex gap={'20px'} px="30px"  flexBasis={'200px'} w="100%" overflow={'hidden'} border={'1px solid #f93'}>
            {videData.map((item)=>{
                return (
                    <Box minWidth={'50%'}  height={'100%'} py="20px" border={'1px solid #f93'} >
                        <NewsItemCard path="/videos" id={item.id} justify={'top'} gap="20px" align="flex-start"flexDir={'column'} imgWidth={'100%'} imgLink={item.image} newsTitle={item.title}/>
                    </Box>
                )
            })}
        </Flex>
    </Box>
  )
}
