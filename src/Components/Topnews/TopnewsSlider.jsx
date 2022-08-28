import {Box, Flex, SkeletonText} from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { getNews } from '../../api/api';
import { NewsDisplayArea } from './NewsDisplayArea';
import { SliderControl } from './SliderControl';
import { SliderTitle } from './SliderTitle';
import {AppContext} from '../../Context/AppContext'

export const TopnewsSlider = () => {
const {state, dispatch}  =  useContext(AppContext);
const [topNews, setTopNews] =  useState([]);
const [newsIndex, setNewsIndex] = useState(1);
const slideref = useRef(null);


const changeIndex = (val)=>{
    clearInterval(slideref.current);
    slideref.current= null; 
    setNewsIndex(val);
}

const startSlide = ()=>{
   if(slideref.current!==null) return;
    slideref.current = setInterval(()=>{  
        setNewsIndex((newsIndex)=>newsIndex+1);
    }, 5000)
}
 
const stopSlide = ()=>{
    clearInterval(slideref.current);
    slideref.current= null; 
}
    
 useEffect (()=>{
    if(newsIndex===6){
        setNewsIndex(0);
    }
    if(newsIndex==-1){
        setNewsIndex(5);
    }
 }, [newsIndex])



const handleGetTopNews  = ()=>{
    getNews('/topnews').then((res)=>{
    setTopNews(res.data);
    })
}

useEffect(() => {
   handleGetTopNews();
   return startSlide();
}, [])

  return (
    <Box w='100%'>   
       <SkeletonText isLoaded={!state.isLoading || !state.isDataLoading }>
        <Flex w={['98%', '90%', '90%']} mx='auto' bg='darkblack' h='50px'>
                <SliderTitle title={'Top News'} height='50px'/>
                <NewsDisplayArea width="70%" height="50px" newsTitle={topNews[newsIndex] }/>
                <Box pos="absolute"  right="5%">
                <SliderControl changeIndex={changeIndex} index={newsIndex} slideref={slideref} startSlide={startSlide} stopSlide={stopSlide}/>
                </Box>
            </Flex>  
       </SkeletonText>
    </Box>
  )
}
