import { Box,Flex, Stack, Text } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'
import { TrendingTopicItem } from './TrendingTopicItem'

export const TrendingTopics = () => {
  return (
    <Box>
        <Flex justify={'space-between'} mx="15px"  mt="40px" fontWeight={'1000'} borderBottom="1px solid #999">
         
            <Text py="10px" borderBottom="1px solid orange"> TRENDING NEWS TOPICS </Text>
          
            <Link to="/">
                <Text> More</Text>
            </Link>
        </Flex>
    
    
    <Stack px="10px" my="20px">    
        <TrendingTopicItem textColor={'#000'} bgcolor={'#F2DD6B'} text="Lalit Modi" path="/" />
        <TrendingTopicItem textColor={'#fff'} bgcolor={'#5564C9'} text="Shri Lanka Crisis" path="/" />
        <TrendingTopicItem textColor={'#000'} bgcolor={'#B993B8'} text="Rishi Sunak" path="/" />
    </Stack>
    </Box>
  )
}
