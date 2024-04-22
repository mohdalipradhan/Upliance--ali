import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Flex, Stack } from '@chakra-ui/react';
import UserDataPage from './pages/UserDataPage';
import { theme } from './chakra/theme';
import Home from './pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Header from './pages/Header';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack overflow={'hidden'}>
        <Header />
        <Routes>
          <Route path='/' element={<SignUpPage />} />
          <Route path='/login' element={<><LoginPage /></>} />
          <Route path='/homepage' element={<Flex justify="center"><Home /></Flex>} />

        </Routes>

      </Stack>

    </ChakraProvider>

  );
}

export default App;