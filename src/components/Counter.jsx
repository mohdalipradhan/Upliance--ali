import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import colors from '../data/colors';
import PopOverBody from './PopOverBody';
import { wrap } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


const Counter = ({ backgroundColor, selectedColor, setSelectedColor, count, setCount }) => {

  const decrementRef = useRef();

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }


  useEffect(() => {
    if (count <= 0) {
      setCount(0);
      decrementRef.current.disabled = true;
    } else if (count > 0) {
      decrementRef.current.disabled = false;
    }
  }, [count])

  return (
    <Stack
      pos="relative"
      direction="column"
      flexWrap="wrap"
      bg="white"
      background={backgroundColor}
      width={{ md: "650px ", base: "100vw" }}
      align="center"
      borderRadius="7px"
      height="340px"
      padding="20px">


      <Text textAlign="center" fontSize="xx-large">
        Count: {count}
      </Text>
      <Flex flexWrap="wrap" justifyContent={{ base: "center" }} marginTop="30px" justify="space-between" gap={20}>
        <Button _hover={{
          bg: "blue.300"
        }} onClick={handleIncrement} borderRadius="0px"><FontAwesomeIcon icon={faPlus} /></Button>
        <Button _hover={{
          bg: "blue.300"
        }} onClick={handleReset} borderRadius="0px">Reset</Button>
        <Button _hover={{
          bg: "blue.300"
        }} ref={decrementRef} onClick={handleDecrement} borderRadius="0px"><FontAwesomeIcon icon={faMinus} /></Button>
      </Flex>

      <Text display={{base: "none", md:"block"}} color="pink.400" mt={6} fontSize="small" fontWeight={700}>Background changes are reflected at bottom of the page.</Text>
      <Flex pos="absolute" bottom={5}>
        <PopOverBody colors={colors} setSelectedColor={setSelectedColor} />
      </Flex>
    </Stack>
  )
}

export default Counter;