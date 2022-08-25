import { Flex, Button} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import {IconButton} from '@chakra-ui/react'
export const SliderControl = ({changeIndex, index, slideref, startSlide, stopSlide}) => {
  return (
    <Flex h={`50px`} align='center' bg='darkblack'>
            <IconButton variant={'outline'} fontSize={`2.5em`} color='light' icon={<ChevronLeftIcon/>} onClick={()=>changeIndex(index-1)}/>
            <Button variant={`outline`} border='none' color={`light`} >
            {slideref.current===null?<span onClick={()=>startSlide()} className="material-icons">play_arrow</span>:
            <span onClick={()=>stopSlide()} className="material-icons">  stop </span>}  
            </Button>
            <IconButton mr='5px' variant={'outline'} fontSize={`2.5em`} color='light' icon={<ChevronRightIcon/>} onClick={()=>changeIndex(index+1)}/>
    </Flex>
  )
}
