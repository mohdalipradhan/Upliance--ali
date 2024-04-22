import React, { useContext, useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useIsLoggedInStore from '../Zustand/Authentication';
import guestUserSignUp from '../Zustand/GuestUserLogin';

const Header = () => {
    const [opeLogout, setOpeLogout] = useState(false);
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useIsLoggedInStore();
    const userName = JSON.parse(localStorage.getItem("user"));
    console.log("this is userName", userName)

    function handleLogOut() {
        setIsLoggedIn(false);
        setOpeLogout(false);
        localStorage.removeItem("user");
    }
    console.log("this is ", isLoggedIn)
    return (
        <Flex color="gray.700" fontWeight={700} fontSize={20} width="100vw" backgroundColor="blue.200" padding={4} justify="center" >
            <Flex justify="space-around" width="80%">
                <Box className="leftMenuSystem" flex="1">
                    <Text
                        className="logo"
                        cursor="pointer"

                        onClick={() => navigate('/homePage')}
                    >
                        Play Ground
                    </Text>
                </Box>
                <Flex flex="1" justify="flex-end" >
                    <Box justifyContent="center"  pos="relative" >
                        {isLoggedIn ? <Text
                            cursor="pointer"
                            onClick={()=>setOpeLogout(!opeLogout)}
                            marginRight="4"
                        >
                            {userName&& userName?.name}
                        </Text> : <Text
                            cursor="pointer"
                            onClick={() => navigate("/")}
                        >Login Now</Text>}
                        {opeLogout && <Flex zIndex={4} left={6} width="auto" cursor="pointer"  onClick={handleLogOut} padding={2} background="white" borderRadius="4px" border="1px solid gray" pos="absolute">
                            <Text>Log Out</Text>
                        </Flex>}
                    </Box>


                </Flex>

            </Flex>

        </Flex>
    )
}

export default Header
