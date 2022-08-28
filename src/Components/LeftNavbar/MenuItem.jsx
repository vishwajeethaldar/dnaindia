import {Flex, Box, Image,Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
export const MenuItem = ({text, url, path,id}) => {

  return (
    <Link to={path} key={id}  >
        <Flex _hover={{'bg':'primary', color:"red"}} gap='7px' justify={'flex-start'} align={'center'} h={`30px`}> 
            <Image src={url} w={`25px`}/> 
              <Text> {text} </Text> 
        </Flex>
    </Link>
  )
}
