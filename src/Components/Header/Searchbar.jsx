import { Input,InputGroup, Button, InputRightElement} from '@chakra-ui/react';
function Searchbar() {
  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={'text'}
        placeholder='search on DNA'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' >
          GO
        </Button>
      </InputRightElement>
    </InputGroup> 
  )
}

export default Searchbar