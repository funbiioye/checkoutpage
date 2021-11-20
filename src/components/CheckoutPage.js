import { Stack, Center, Text,Flex, Box, Heading, VStack, HStack } from '@chakra-ui/layout'
import {Icon} from '@chakra-ui/icon'
import {
  Menu,
  MenuButton,
  Image
} from "@chakra-ui/react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react"
import React from 'react'
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import {BiCheckShield} from 'react-icons/bi'
import { ChevronDownIcon, ChevronRightIcon, ArrowBackIcon } from '@chakra-ui/icons'
import logo  from '../images/Logo.svg';

function CheckoutPage() {
  return (
    <Box  h='100%' mb='525px'>
      <Box bg='#27A599' color='#fff' h='40px'   >
        <Flex>
          <Text ml={'137px'} pt={'12px'} pb={'9px'} fontSize='12px'>Sell on Fuud Fair</Text>
          <Icon as={BiCheckShield} color='#fff' mt={'10px'} ml={'192px'} mr={'13px'} boxSize={'22px'}/>
          <Text  pt={'12px'} pb={'9px'} fontSize='12px'>100% secure delivery without contacting the courier </Text>
          <Text  pt={'12px'} pb={'9px'} fontSize='12px' ml='16px' mr='13px'> ｜ </Text>
          <Text  pt={'12px'} pb={'9px'} fontSize='12px'> Need help? call us: +23470020045 </Text>
        </Flex>
      </Box>
      <Box bg='#fff' h='96px' >
        <Flex>
          <Image src={logo} w='114px' h='30px' mt='34px' ml='98px' ></Image>
          <Input  placeholder="Search through our products"  borderColor='#c2c2c2'  borderRadius='30px' w='445px' h='48px' mt='24px' mb='24px' ml='139px'/>
          <Button bg='#FF9F1C' color='#FFF' borderRadius='30px' mt='26px' mb='22px' ml='16px' pb='2px'>search</Button>
          <Icon />
          <Menu>
            <MenuButton color=' #333333'  fontWeight='500' font='poppins' ml='72px' fontSize='16px'   righticon={<ChevronDownIcon />}>
              Hi, Bolu
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton color=' #333333' fontSize='16px' fontWeight='500' font='poppins' ml='32px' /*leftIcon={<ChevronDownIcon />} rightIcon={<ChevronDownIcon />}*/>
              saved items
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton color=' #333333' fontSize='16px' fontWeight='500' font='poppins' ml='32px' /*leftIcon={<ChevronDownIcon />} rightIcon={<ChevronDownIcon />}*/>
              cart
            </MenuButton>
          </Menu>
        </Flex>
      </Box>
      <Flex>
        <Icon as={ArrowBackIcon} ml='105px' mt='26px' color='black' />
        <Text color='black'    mt='22px' ml='5px' >back</Text>
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500"  />} mt='26px' ml='390px'>
          <BreadcrumbItem color='#27A599'  >
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem color='#27A599'  >
            <BreadcrumbLink href="#">store</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem color='#27A599'  >
            <BreadcrumbLink href="#">cart</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage  color='#FF9F1C'>
            <BreadcrumbLink href="#">Checkout</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Center>
        <Heading color='#27A599' fontSize='28px' fontWeight='600' font='poppins' mt='14px' >Checkout</Heading>
      </Center>
      <Flex mt='79px' >
        <Box ml='100px' mr='236px'>
          <Heading fontSize='21px' fontWeight='600' font='poppins' color='#27A599' >Billing Information</Heading>
          <Flex mt='16px'>
            <Text color='#27A599'>Name:</Text>
            <Text ml='60px' color='#646464'> Oluwasegun Elijah Adebisi</Text>
          </Flex>
          <Flex>
            <Text color='#27A599'>E-mail:</Text>
            <Text ml='60px' color='#646464'> Oluwasegunadebisi617@gmail.com</Text>
          </Flex>
          <Flex>
            <Text color='#27A599'>Phone No:</Text>
            <Text ml='34px' color='#646464'> 08163462779</Text>
          </Flex>
          <Text mt='32px' mb='16px' color='#646464'> Dellivery Address</Text>
          <Input bg='#fff' boxSizing='border-box' borderRadius='30px' border='1px solid #F5F5F5' boxShadow='0px 2px 5px rgba(39, 165, 153, 0.08)' color='#646464'  />
          <Flex>
            <Box  mt='32px' >
              <Text color='#646464' mb='16px'>City</Text>
              <Input bg='#fff' boxSizing='border-box' borderRadius='30px' border='1px solid #F5F5F5' boxShadow='0px 2px 5px rgba(39, 165, 153, 0.08)' color='#646464'/>
            </Box>
            <Box  mt='32px' ml='28px' >
              <Text color='#646464' mb='16px'>Zip Code</Text>
              <Input bg='#fff' boxSizing='border-box' borderRadius='30px' border='1px solid #F5F5F5' boxShadow='0px 2px 5px rgba(39, 165, 153, 0.08)' color='#646464'/>
            </Box>
          </Flex>
          <Button h='48px' w='609px' bg='#FF9F1C' boxSizing='border-box' borderRadius='30px' border='1px solid #FF9F1C' boxShadow='0px 4px 4px rgba(194, 194, 194, 0.3)' color='#fff' mt='72px'>confirm</Button>
        </Box>
        <VStack>
          <Heading>Order Summary</Heading>
          <Flex>
            <Box>
              <Image></Image>
            </Box>
            <Stack>
              <Text> Peak Full Cream</Text>
              <Text>1 pack</Text>
            </Stack>
            <Text> 2500</Text>
          </Flex>
          <Flex>
            <Text> Discount</Text>
            <Text> Sub total</Text>
          </Flex>
          <Flex>
            <Text> Total</Text>
            <Text> 2400</Text>
          </Flex>
          <Box>
            <Flex>
              <Text></Text>
              <Text></Text>
            </Flex>
          </Box>
          <Box></Box>
          <Flex>
            <Input></Input>
            <Button> Apply </Button>
          </Flex>
        </VStack>
      </Flex>
      
    </Box  >
  );
}

export default CheckoutPage


