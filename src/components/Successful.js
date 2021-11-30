import React from 'react'
import { Stack, Text, Heading, Box, Flex  } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button';
import { Image } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import { Menu, MenuButton } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { BiCheckShield } from "react-icons/bi";
import successful  from '../images/successful.svg';
import {ChevronDownIcon} from "@chakra-ui/icons";
import logo from "../images/Logo.svg";

function Successful() {
    return (
        
        <Stack h='100%' minHeight='100vh'>
            <Box h="100%" w="100%" maxWidth="100vw" >
                <Box bg="#27A599" color="#fff" h="100%" maxHeight="40px" w="100%">
                    <Flex w="100%">
                        <Text
                        ml={["32px", "137px"]}
                        pt={["5px", "12px"]}
                        pb={("4px", "9px")}
                        fontSize="12px"
                        >
                            Sell on Fuud Fair
                        </Text>
                        <Icon
                            as={BiCheckShield}
                            color="#fff"
                            mt={"10px"}
                            ml={["12px", "192px"]}
                            mr={"13px"}
                            boxSize={"22px"}
                        />
                        <Text pt={"12px"} pb={"9px"} fontSize="12px">
                            100% secure delivery without contacting the courier{" "}
                        </Text>
                        <Text pt={"12px"} pb={"9px"} fontSize="12px" ml="16px" mr="13px">
                            {" "}
                            ｜{" "}
                        </Text>
                        <Text pt={"12px"} pb={"9px"} fontSize="12px">
                            {" "}
                            Need help? call us: +23470020045{" "}
                        </Text>
                    </Flex>
                </Box>
                <Box bg="#fff" h="96px" w="100%">
                    <Flex>
                        <Image src={logo} w="114px" h="30px" mt="34px" ml="98px"></Image>
                        <Input
                            placeholder="Search through our products"
                            borderColor="#c2c2c2"
                            borderRadius="30px"
                            w="445px"
                            h="48px"
                            mt="24px"
                            mb="24px"
                            ml="139px"
                        />
                        <Button
                            bg="#FF9F1C"
                            color="#FFF"
                            borderRadius="30px"
                            mt="26px"
                            mb="22px"
                            ml="16px"
                            pb="2px"
                        >
                            search
                        </Button>
                        <Icon />
                        <Menu>
                            <MenuButton
                            color=" #333333"
                            fontWeight="500"
                            font="poppins"
                            ml="72px"
                            fontSize="16px"
                            righticon={<ChevronDownIcon />}
                            >
                            Hi, Bolu
                            </MenuButton>
                        </Menu>
                        <Menu>
                            <MenuButton
                            color=" #333333"
                            fontSize="16px"
                            fontWeight="500"
                            font="poppins"
                            ml="32px" /*leftIcon={<ChevronDownIcon />} rightIcon={<ChevronDownIcon />}*/
                            >
                            saved items
                            </MenuButton>
                        </Menu>
                        <Menu>
                            <MenuButton
                            color=" #333333"
                            fontSize="16px"
                            fontWeight="500"
                            font="poppins"
                            ml="32px" /*leftIcon={<ChevronDownIcon />} rightIcon={<ChevronDownIcon />}*/
                            >
                            cart
                            </MenuButton>
                        </Menu>
                    </Flex>
                </Box>
            </Box>
            <Box align='center' >
                <Image src={successful}   w='198px' h='198px' mt='100px'  />
            </Box>
            <Heading align='center' color='#27A599' fontSize='28px' fontWeight='600' >Your payment have been confirmed</Heading>
            <Text mt='26px' align='center' fontSize='16px' fontWeight='400' color='#8F8F8F'>A payment receipt has been sent to your email.</Text>
            <Box align='center'>
                <Button
                bg="#FF9F1C"
                boxSizing="border-box"
                borderRadius="30px"
                border="1px solid #FF9F1C"
                w="400px"
                h="48px"
                mt='30px'
                mb='191px'
                
                >
                {" "}
                Done{" "}
                </Button>
            </Box>
        </Stack>
        
    )
}

export default Successful
