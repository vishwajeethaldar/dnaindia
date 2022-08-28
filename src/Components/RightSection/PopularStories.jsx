import {Box, Flex, Stack, Text} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getNews } from '../../api/api'
import { NewsItemCard } from '../Body/NewsItemCard'

export const PopularStories = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
      getNews('/topnews').then((res)=>{
            setData(res.data);
   
        })
    },[])
   
  return (
    <Box>
       <Flex justify={'space-between'} mx="15px"  mt="40px" fontWeight={'1000'} borderBottom="1px solid #999">
         
         <Text py="10px" borderBottom="1px solid orange"> POPULAR STORIES </Text>
       
         <Link to="/">
             <Text> More</Text>
         </Link>
     </Flex>
       
        <Stack px="10px" my="20px">
          {data.map((item)=>{
            return <Box bg='light' py='15px' px='10px' key={item.id}>
                <NewsItemCard path='topnews' id={item.id} gap='10px' textFont='14px' imgLink={item.image} newsTitle={item.title} imgWidth='100px' imgHeight='80px'/>
            </Box>
          })}
            
        </Stack>
    </Box>
  )
}
