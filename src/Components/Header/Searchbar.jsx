import { Input,InputGroup, Button, InputRightElement} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { searchNews } from '../../api/api';
import { ACTIONTYPES } from '../../Context/actiontypes';
import { AppContext } from '../../Context/AppContext';

function Searchbar() {
  const {state, dispatch} =  useContext(AppContext);
  const srcRef =  useRef(null);

  const handleData=(e)=>{
    dispatch({type:ACTIONTYPES.SEARCH_QUERY_UPDATE, payLoad:e.target.value});    
  }


  const handlSearchData = (query)=>{
     searchNews('/sports', query).then((res)=>{
      dispatch({type:ACTIONTYPES.SEARCH_DATA_SUCCESS, payLoad:{"key":"sports", data:res.data}});
     }).catch((err)=>{
      dispatch({type:ACTIONTYPES.GET_DATA_FAILURE})
      console.log(err)
     })

    searchNews('/india', query).then((res)=>{
      dispatch({type:ACTIONTYPES.SEARCH_DATA_SUCCESS, payLoad:{"key":"india", data:res.data}});
     }).catch((err)=>{
      dispatch({type:ACTIONTYPES.GET_DATA_FAILURE})
      console.log(err)
     })
    
     searchNews('/world', query).then((res)=>{
      dispatch({type:ACTIONTYPES.SEARCH_DATA_SUCCESS, payLoad:{"key":"world", data:res.data}});
     }).catch((err)=>{
      dispatch({type:ACTIONTYPES.GET_DATA_FAILURE})
      console.log(err)
     })

     searchNews('/business', query).then((res)=>{
      dispatch({type:ACTIONTYPES.SEARCH_DATA_SUCCESS, payLoad:{"key":"business", data:res.data}});
     }).catch((err)=>{
      dispatch({type:ACTIONTYPES.GET_DATA_FAILURE})
      console.log(err)
     })

     searchNews('/education', query).then((res)=>{
      dispatch({type:ACTIONTYPES.SEARCH_DATA_SUCCESS, payLoad:{"key":"education", data:res.data}});
     }).catch((err)=>{
      dispatch({type:ACTIONTYPES.GET_DATA_FAILURE})
      console.log(err)
     })

     searchNews('/lifestyle', query).then((res)=>{
      dispatch({type:ACTIONTYPES.SEARCH_DATA_SUCCESS, payLoad:{"key":"education", data:res.data}});
     }).catch((err)=>{
      dispatch({type:ACTIONTYPES.GET_DATA_FAILURE})
      console.log(err)
     })
  }

  useEffect(()=>{
      return ()=> clearTimeout(srcRef.current);
  },[])
  return (
    <InputGroup size='md'>
      <Input
        onChange={(event)=>{
          handleData(event);
          handlSearchData(state.query);
        }}
        pr='4.5rem'
        type={'text'}
        placeholder='search on DNA'
      />
      <InputRightElement width='4.5rem'>
        <Link to={`/search`}>
          <Button h='1.75rem' size='sm' onClick={()=>handlSearchData(state.query)}>
            GO
          </Button>
        </Link>
      </InputRightElement>
    </InputGroup> 
  )
}

export default Searchbar