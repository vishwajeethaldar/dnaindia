import {Box, Text} from '@chakra-ui/react';

export const SliderTitle = ({title, height}) => {
  return (
    <Box minW={{sm:'20%', md:'20%', lg:'10%'}} px={['5px', '10px', '30px']} textAlign={`center`}  lineHeight={height} fontFamily="times-new-roman" borderRadius={`0px 7px 7px 0px`} bg='lightblack'>
        <Text > {title} </Text>
    </Box>
  )
}
