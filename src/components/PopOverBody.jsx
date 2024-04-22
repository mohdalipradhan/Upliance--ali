import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Flex,
    Text,
} from '@chakra-ui/react'

const PopOverBody = ({colors, setSelectedColor}) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Button borderRadius={2}>Choose Color</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverCloseButton />
                <PopoverHeader>Select Color</PopoverHeader>
                <PopoverBody >
                    {
                        colors?.map((item, index)=>(
                            <Flex gap={3} flexDir="row" justify="space-between" align="center">
                                <Text color="gray.700">{item.name}</Text>
                                <Button _hover={{
                                    bg: item.hexCode
                                }} onClick={() => setSelectedColor(item.hexCode)} height="20px" bg={item.hexCode}>HG</Button>
                            </Flex>
                        ))
                    }
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default PopOverBody
