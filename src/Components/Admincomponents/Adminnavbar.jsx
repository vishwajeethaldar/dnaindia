import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, {useContext} from 'react'

import {ACTIONTYPES} from '../../Context/actiontypes.js'
import { AppContext } from "../../Context/AppContext";
import {Link} from 'react-router-dom';
export const Adminnavbar = () => {
        const {state, dispatch} = useContext(AppContext);
        const HandleLogout=()=>{
                localStorage.removeItem("@token")
                dispatch({type:ACTIONTYPES.LOGOUT});
        }
  return (
    <Box>
        <Flex py="10px" px="10px" justify={'space-between'} boxShadow="base" align={'center'} bg="primary">
                <Box>
                        <Link to="/admin">
                            <Text fontSize="2em" fontWeight="600">Dashboard</Text>
                        </Link>
                </Box>

                <Box>
                        <Button onClick={HandleLogout} colorScheme={'twitter'}>Logout</Button>
                </Box>
        </Flex>
    </Box>
  )
}
