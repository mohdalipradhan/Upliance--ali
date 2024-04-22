import { Drawer, DrawerBody, DrawerContent, DrawerHeader, Flex, Radio, RadioGroup, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

const PlacementLinkLeft = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
    return (
        <>
            <Flex>
                <Flex>
                    <Text>
                        Full Stack Web Developer 
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}

export default PlacementLinkLeft
