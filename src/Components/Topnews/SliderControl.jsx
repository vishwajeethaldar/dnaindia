import { Flex, Button} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import {IconButton} from '@chakra-ui/react'
export const SliderControl = ({changeIndex, index, slideref, startSlide, stopSlide}) => {
  return (
    <Flex h={`50px`} align='center' bg='darkblack'>
            <IconButton variant={'outline'} fontSize={`2.5em`} color='light' icon={<ChevronLeftIcon/>} onClick={()=>changeIndex(index-1)}/>
            <Button variant={`outline`} border='none' color={`light`} _hover=''>
            {slideref.current===null?<span onClick={()=>startSlide()} class="material-icons">play_arrow</span>:
            <span onClick={()=>stopSlide()} class="material-icons">  stop </span>}  
            </Button>
            <IconButton mr='5px' variant={'outline'} fontSize={`2.5em`} color='light' icon={<ChevronRightIcon/>} onClick={()=>changeIndex(index+1)}/>
    </Flex>
  )
}
