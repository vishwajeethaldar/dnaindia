import {Box, Flex, Stack, Text} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getTopNews } from '../../api/api'
import { NewsItemCard } from '../Body/NewsItemCard'

export const PopularStories = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        getTopNews().then((res)=>{
            setData(res.data);
   
        })
    },[])
   
  return (
    <Box>
        <Flex justify={`space-between`} borderBottom="1px solid #ccc">
            <Text>POPULAR STORIES</Text>
            <Text>More</Text>
        </Flex>

        <Stack>
          {data.map((item)=>{
            return <Box bg='light' py='15px' px='10px' key={item.id}>
                <NewsItemCard path='popularnews' id={item.id} gap='10px' textFont='14px' imgLink={item.image} newsTitle={item.title} imgWidth='100px' imgHeight='80px'/>
            </Box>
          })}
            
        </Stack>
    </Box>
  )
}
