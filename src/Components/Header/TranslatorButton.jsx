import React from 'react';
import {Button} from '@chakra-ui/react';
export const TranslatorButton = ({mode}) => {
  return (
    <Button borderRadius={'30px'}  variant='outline' mx={'20px'}> {mode=='hindi'?"Translate in English":'हिन्दी में पढ़े'} </Button>
  )
}
