import { Flex, FormControl, FormHelperText, FormLabel, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; // For generating UUIDs
import dataUserShowPersist from '../Zustand/DataPersist';

const UserdataDisplay = () => {

  const {userShow, setUserShow} = dataUserShowPersist();

    const alreadyHaveValue = JSON.parse(localStorage.getItem("userData"));
    const defaultInputState = {
        userId: "",
        name: "",
        email: "",
        textarea: "",
        tel: ""
      };    



  const inputRef = useRef();
  const [count, setCount] = useState(1);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const [inputState, SetInputState] = useState(defaultInputState)

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    textarea: "",
    tel: "",

  })

  function validateForm() {
    const { name, email, textarea, tel } = inputState;
    let isValid = true;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    let newErrors = {
      name: '',
      email: '',
      textarea: '',
      tel: '',
    };

    if (!name.length) {
      newErrors.name = 'Name cannot be empty';
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!textarea.length) {
      newErrors.textarea = 'Fill the text area';
      isValid = false;
    }
    if (!tel) {
      newErrors.tel = 'Incomplete';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }


  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const userId = uuidv4();
      localStorage.setItem('userData', JSON.stringify({ ...inputState, userId }));
      setUserShow(userId);
      setUnsavedChanges(false);
      inputRef.current.innerText = 'Form Edited Successfully';

    } else {
      inputRef.current.innerText = '';

    }
  }

  useEffect(()=>{
    SetInputState(alreadyHaveValue);
  },[userShow])

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    SetInputState((oldState) => ({
      ...oldState,
      [name]: value,
    }))

    setUnsavedChanges(true);
  }

  useEffect(() => {
    const handleBeforeUnload = event => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = ''; // This line will show a confirmation dialog
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  return (
    <Flex borderRadius="7px" width="100%"  justify="center" background="white" padding="17px">
      <form style={{ width: "100%" }} action="" onSubmit={handleOnSubmitForm}>
        <FormLabel>Name</FormLabel>
        <Input value={inputState.name} name='name' onChange={handleNameChange} placeholder='Enter your name' type='text' bg="white" />
        <Text fontSize="x-small" color="red">{errors.name}</Text>

        <FormLabel>Email address</FormLabel>
        <Input value={inputState.email} onChange={handleNameChange} name='email' placeholder='Enter your email' bg="white" type='email' />
        <Text fontSize="x-small" color="red">{errors.email}</Text>


        <FormLabel>Address</FormLabel>
        <Textarea value={inputState.textarea} onChange={handleNameChange} name='textarea' bg="white" placeholder='Here is a sample placeholder' />
        <Text fontSize="x-small" color="red">{errors.textarea}</Text>


        <FormLabel>Phone</FormLabel>
        <Input value={inputState.tel} onChange={handleNameChange} name='tel' placeholder='Enter your contact' bg="white" type='number' />
        <Text fontSize="x-small" color="red">{errors.tel}</Text>

        <Text 
        mt={3}
        padding={2}
        fontWeight={700}
        border="1px solid lightgray">
          Unique User Id is 
          <Text fontWeight={500} color="blue.300">{inputState.userId}</Text>
        </Text>


        <Input bg="blue.400" width="90px" mt={5} cursor="pointer" type='submit' value="Edit" />
        <Text ref={inputRef} fontSize="small" color="green.500" fontWeight={700}></Text>

      </form>
    </Flex>

  )
}

export default UserdataDisplay
{/* <FormHelperText>We'll never share your email.</FormHelperText> */ }
