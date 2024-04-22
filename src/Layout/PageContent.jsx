import { Flex } from '@chakra-ui/react'
import React from 'react'

const PageContent = ({ children }) => {
    return (
        <Flex justify="center" p="16px 0px" >
            <Flex
                width="90%"
                justify="center"
                
            >
                {/* Left Hand Side */}
                <Flex
                display={{ md: "flex"}}
                    direction="column"
                    width="100%"
                    mr={{ base: 0 }}
                    flex={1}
                >
                    {children && children[0]}
                </Flex>
            

            </Flex>
        </Flex>
    )
}

export default PageContent
