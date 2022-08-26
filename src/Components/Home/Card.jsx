import { Box } from '@chakra-ui/react'
import React from 'react'
import { MoreNewsLink } from '../Utils/MoreNewsLink'
import { NewsItemCard } from '../Utils/NewsItemCard'

export const Card = ({data=[], path, text, link}) => {
   return (
       <Box>
     
        { data&&data.map((item, i)=>{
                return i===0?<Box py="15px" px="5px" bg={`light`} mb="10px" borderRadius={`3px` } key={item.id}>
                    <NewsItemCard flexDir={'column'} imgWidth="100%" gap="10px" id={item.id} imgLink={item.image} newsTitle={item.title} path={path} textFont={['1em','1.1em','1.2em']}/>
                </Box>:
                (i>0&&i<=2)?
                <Box py="15px" px="5px" bg={`light`} mb="10px" borderRadius={`3px` } key={item.id}>
                    <NewsItemCard  imgWidth="150px" gap="10px" id={item.id} imgLink={item.image} newsTitle={item.title} path={link} textFont={['1em','1.1em','1.2em']}/>
                </Box>:
                ""
                
            })
        }
        <Box w="100%" bg="light" py="5px" fontSize={['1em', '1.2em', '1.4em']}>
            <MoreNewsLink link={link} text={text}/>
        </Box>
       </Box>
   )
}
