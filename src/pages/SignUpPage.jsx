import { Button, Flex, FormLabel, Input, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import guestUserSignUp from '../Zustand/GuestUserLogin';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        
    });


    // function handleNavigate(){
    //     navigate("/homepage");
    //     const user = {
    //         "name": "Mohammad Ali",
    //         "password": "123456",
    //         "email": "mdsali914@gmail.com"
    //     };
    //     localStorage.setItem("userFullName", user.name);
    // }
    
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));

        setFormData({
            name: '',
            password: '',
            email: '',
        });

        setMessage("Now you can login")
        navigate('/login')
    };

    return (
        <Flex width="100vw" height="100vh" align="center" justify="center">
            <Flex borderRadius="7px" width={{ base: "90%", md: "50%" }} height="400px" align="center" justify="center" background="white" padding="17px">
                <form style={{ width: "100%" }} action="" onSubmit={handleSubmit}>
                    <FormLabel>Name</FormLabel>
                    <Input name='name' onChange={handleChange} placeholder='Enter your name' type='text' bg="white" />

                    <FormLabel>Email address</FormLabel>
                    <Input onChange={handleChange} name='email' placeholder='Enter your email' bg="white" type='email' />


                    <FormLabel>Password</FormLabel>
                    <Input onChange={handleChange} name='password' type='number' bg="white" placeholder='Enter your password' />





                    <Text mt={5} fontSize="10px" fontWeight={700} color={"green.400"}>Not a user? Signup now</Text>

                    <Flex gap={2}>
                        <Input bg="blue.400" width="90px" mt={5} cursor="pointer" type='submit' value="Sign Up" color="white" fontWeight={700} />

                    </Flex>

                    <Text fontSize="small" color="green.500" fontWeight={700}>{message}</Text>

                </form>
            </Flex>
        </Flex>
    )
}

export default SignUpPage
