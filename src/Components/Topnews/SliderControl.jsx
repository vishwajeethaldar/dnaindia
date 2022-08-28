import { Flex, Button} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import {IconButton} from '@chakra-ui/react'
export const SliderControl = ({changeIndex, index, slideref, startSlide, stopSlide}) => {
  return (
    <Flex h={`50px`} align='center' bg='darkblack'>
            <IconButton  _hover={{"bg":"#000", "color":"#f35"}} variant={'outline'} fontSize={['1.4em', '1.6em', '2.5em']} color='light' border={'none'} icon={<ChevronLeftIcon/>} onClick={()=>changeIndex(index-1)}/>
            <Button variant={`outline`} border='none' color={`light`} _hover={{"bg":"#000", "color":"#f35"}} >
            {slideref.current===null?<span onClick={()=>startSlide()} className="material-icons" fontSize={['1.4em', '1.6em', '2.5em']}>play_arrow</span>:
            <span onClick={()=>stopSlide()} className="material-icons">  stop </span>}  
            </Button>
            <IconButton _hover={{"bg":"#000", "color":"#f35"}} mr='5px' fontSize={['1.4em', '1.6em', '2.5em']} variant={'outline'} border={'none'}  color='light' icon={<ChevronRightIcon/>} onClick={()=>changeIndex(index+1)}/>
    </Flex>
  )
}
