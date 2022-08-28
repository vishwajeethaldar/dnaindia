import React, { useContext } from 'react'
import {Box, SkeletonText} from '@chakra-ui/react'
import { PopularStories } from './PopularStories'
import { TrendingTopics } from './TrendingTopics'
import { AppContext } from '../../Context/AppContext'

export const RightSection = () => {
  const {state}  =  useContext(AppContext);
  return (
  
   <Box>
      {state.isLoading||state.isDataLoading? <SkeletonText h="200px" mt="50px" ml="20px" bg="white"/>: <TrendingTopics/> } 
      {state.isLoading||state.isDataLoading? <SkeletonText h="300px" mt="20px" ml="20px" bg="white"/>:<PopularStories />}
    </Box>
  )
}
