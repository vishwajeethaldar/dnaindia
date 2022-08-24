// import React from 'react'
import { Image} from '@chakra-ui/react'

function BrandLogo(props) {
  console.log()
  return (
      <Image src={props.image} htmlWidth={props.width} htmlHeight={props.height} borderRadius={props.radius} alt={props.alt}/>
  )
}

export default BrandLogo