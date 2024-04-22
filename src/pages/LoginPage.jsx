import { Button, Flex, FormLabel, Input, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useIsLoggedInStore from '../Zustand/Authentication';
import guestUserSignUp from '../Zustand/GuestUserLogin';

const LoginPage = () => {
    const [loginData, setLoginData] = useState({
      email: '',
      password: '',
    });

    const {isLoggedIn,setIsLoggedIn} = useIsLoggedInStore();

    const [errorMessage, setErrorMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginData({
        ...loginData,
        [name]: value,
      });
    };
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (
        storedUser &&
        storedUser.email === loginData.email &&
        storedUser.password === loginData.password
      ) {
          setIsLoggedIn(true);
          setErrorMessage("True"); // I Set logged in state to true
          navigate("../homepage")
          
      } else {
        setErrorMessage('Invalid Credentials');
      }
    };

    return (
        <Flex width="100vw" height="100vh" align="center" justify="center">
            <Flex borderRadius="7px" width={{ base: "90%", md: "50%" }} height="400px" align="center" justify="center" background="white" padding="17px">
                <form style={{ width: "100%" }} action="" onSubmit={handleLogin}>
                    
                    <FormLabel>Email address</FormLabel>
                    <Input onChange={handleChange} name='email' placeholder='Enter your email' bg="white" type='email' />


                    <FormLabel>Password</FormLabel>
                    <Input onChange={handleChange} name='password' type='number' bg="white" placeholder='Enter your password' />




                    <Input bg="blue.400" width="auto" mt={5} cursor="pointer" type='submit' value="Login Now" color="white" fontWeight={700} />

                    <Text mt={4} color="red" fontWeight={700} fontSize="x-small">{errorMessage}</Text>
                    <Text mt={5} fontSize="10px" fontWeight={700} color={"green.400"}>Already a user? Login now</Text>
                   

                </form>
            </Flex>
        </Flex>
    )
}

export default LoginPage
