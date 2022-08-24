import {Box, Stack, Flex,Text, VStack, Image} from '@chakra-ui/react';
import BrandLogo from '../Header/BrandLogo';
import { ExternalLinks } from './ExternalLinks';
import { FooterLink } from './FooterLink';
const news_links = [
    {
        path:"/india",
        text:"INDIA"
    },
    {
        path:"/world",
        text:"WORLD"
    },
    {
        path:"/business",
        text:"BUSINESS"
    },
    {
        path:"/technology",
        text:"TECHNOLOGY"
    },
    {
        path:"/sports",
        text:"SPORTS"
    },
    {
        path:"/cricket",
        text:"CRICKET"
    },
    {
        path:"/entertainment",
        text:"ENTERTAINMENT"
    }
]
const info_links  =[
    {
        path:"about-dna",
        text:"ABOUT DNA"
    },
    {
        path:"contact-us",
        text:"CONTACT US"
    },
    {
        path:"investors",
        text:"INVESTORS"
    },
    {
        path:"/advertise",
        text:"ADVERTISE"
    },
    {
        path:"/privacy-policy",
        text:"PRIVACY-POLICY"
    }
]

const partner_links = [
    {
        path:"https://zeenews.india.com/",
        text:"ZEE NEWS"
    },
    {
        path:"https://zeenews.india.com/hindi",
        text:"HINDI NEWS"
    },
    {
        path:"https://zeenews.india.com/marathi",
        text:"MARATHI NEWS"
    },
    {
        path:"https://zeenews.india.com/bengali",
        text:"BANGALI NEWS"
    },
    {
        path:"https://zeenews.india.com/tamil",
        text:"TAMIL NEWS"
    } ,
    {
        path:"https://zeenews.india.com/malayalam",
        text:"MALIYALAM NEWS"
    }  
    ,
    {
        path:"https://www.zeebiz.com/",
        text:"ZEE BUSINESS"
    },
    {
        path:"https://www.wionews.com/",
        text:"WION"
    }               
]
export const Footer = () => {
  return (
   <Box bg="darkblack">
            <VStack  w={['98%', '90%', '90%']} mx='auto'>
            <Flex borderBottom={['none', 'none', '1px solid #fff']} py='20px' justify={['center', 'center', 'space-between']} w='100%' minH ='60px' align={`center`}>  
                <Box  w={['0%', '0%', '15%']} display={['none', 'none', 'block']}>
                     <BrandLogo width="100px" image="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png"/>   
                </Box>

                <Box w={['100%', '100%', '85%']}>
                    <Flex align={'center'} justify={['center', 'center', 'flex-start']} wrap={`wrap`} gap={`20px`}>
                            {news_links.map((item, i)=>{
                                return <FooterLink path={item.path} text={item.text} borderRht={i<news_links.length-1}/>
                            })}
                    </Flex>
                </Box>
            </Flex>

            <Flex borderBottom={['none', 'none', '1px solid #fff']} py='20px' justify={['center', 'center', 'space-between']} w='100%' minH ='60px' align={`center`}> 
                <Box  w={['100%', '100%', '15%']} display={['block', 'block', 'block']}>
                     
                <Stack>
                    <Text color="light" display={['none', 'none', 'block']}>
                        FOLLOW US ON
                    </Text>

                    <Flex gap={['50px', '50px', '10px']} justify={['center', 'center', 'flex-start']}>
                        <a href="https://www.youtube.com/channel/UCIRAYFbJmrP--jyrC9MAIWQ/videos" target="_black"><Image w='30px' opacity={.6} src="https://english.cdn.zeenews.com/static/apprun/dna/icons/youtube-white.svg" /></a>
                        <a href = "https://twitter.com/dna" target="_blank"> <Image w='30px' opacity={.6} src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-twitter.svg" /></a>
                        <a href = "https://www.facebook.com/dnaindia" target="_blank"><Image w='30px' opacity={.6} src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-facebook.svg" /></a>
                    </Flex>
                </Stack>
                </Box>

                <Box w={['100%', '100%', '85%']} display={['none', 'none', 'block']}>
                    <Flex  align={'center'} justify={['center', 'center', 'flex-start']} wrap={`wrap`} gap={`20px`}>
                            {info_links.map((item)=>{
                                return <FooterLink path={item.path} text={item.text}/>
                            })}
                    </Flex>
                </Box>
            </Flex>

            <Flex display={['none', 'none', 'flex']} borderBottom={['none', 'none', '1px solid #fff']} py='20px' justify={['center', 'center', 'flex-start']} w='100%' minH ='60px' align={`center`}> 
                
                <Box w={['0%', '0%', '15%']} display={['none', 'none', 'block']}>
                    <Text color="light">
                            PARTNER SITE
                    </Text>   
                </Box>

                <Box w={['100%', '100%', '85%']}>
                    <Flex align={'center'} justify={['center', 'center', 'space-between']} wrap={`wrap`} gap={`20px`}>
                            {partner_links.map((item)=>{
                                return <ExternalLinks path={item.path} text={item.text}/>
                            })}
                    </Flex>
                </Box>
            </Flex>

            <Box>
                <Text fontSize={['10px', '12px', '14px']} color="light" textAlign={`center`} py="30px"> ©1998-2022 INDIA DOT COM PRIVATE LIMITED, ALL RIGHTS RESERVED. </Text>
            </Box>
            </VStack>
   </Box>
  )
}
