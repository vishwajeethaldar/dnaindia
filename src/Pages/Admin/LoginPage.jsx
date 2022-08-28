import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { logInProcess } from '../../api/api'
import { Footer } from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import axios from 'axios'
import { AppContext } from '../../Context/AppContext'
import { ACTIONTYPES } from '../../Context/actiontypes'
import { Navigate } from 'react-router-dom'
export const LoginPage = () => {
    const {state, dispatch} = useContext(AppContext)
    const [userState, setUserState] =  useState({email:"", passowrd:""})
    const handleChange=(e)=>{
        const {name, value} =  e.target;
        setUserState({...userState, [name]:value})  
    }

    const handleLogin = ()=>{
        logInProcess(userState).then((res)=>{
            localStorage.setItem('@token', JSON.stringify(res.data.token));
            dispatch({type:ACTIONTYPES.LOGIN_SUCCESS, payLoad:res.data.token})
        })
        // axios.post('https://reqres.in/api/login', {
        //     "email":userState.email,
        //     "password":userState.passowrd
        // }).then((res)=>{
        //     console.log(res);
        // })
    }

    if(state.isAuth===true){
        return <Navigate to="/admin" />
    }
    
  return (
    <Box>
        <Header />
        <Box w={['90%', '90%', '40%']} mx="auto" boxShadow={'lg'} p="30px" my="50px">
            <Box>
                <Text textAlign={'center'} fontSize={['1.4em', '1.5em', '2em']} fontWeight="800" my="20px"> Login </Text>
            </Box>
            <FormControl>
                <FormLabel mt="20px">UserName</FormLabel>
                <Input name="email" onChange={handleChange}  value={userState.email} type="email" placeholder="Type your Username"/>
                <FormLabel mt="20px">Password</FormLabel>
                <Input name="passowrd" onChange={handleChange} value={userState.passowrd} type="password" placeholder="Type your Password"/>
                <Button onClick={ handleLogin} colorScheme={'twitter'} my="20px" w="150px"> Login </Button>
            </FormControl>
            <Stack>
                <Box as="p" color={'#999'} fontSize="18px" fontWeight={'700'}>
                    email:eve.holt@reqres.in
                 </Box>
                 <Box as="p" color={'#999'} fontSize="18px" fontWeight={'700'}>
                    password:cityslicka
                 </Box>
            </Stack>
            
           
        </Box>   
         
        <Footer />
    </Box>
  )
}
