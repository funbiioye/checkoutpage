import { useHistory } from "react-router-dom";
import { Center, Text,Flex, Box, Heading, Stack } from '@chakra-ui/layout'
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
import { ChevronDownIcon, ChevronRightIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import logo  from '../images/Logo.svg';
import peak  from '../images/peak.svg';
import star  from '../images/star.svg';
import { Radio, RadioGroup } from '@chakra-ui/react'

function ShippingMethod() {
  const history = useHistory();
  return (
    <Box  h='100%' w='100%' maxWidth='100vw' mb='525px'>
      <Box bg='#27A599' color='#fff' h='100%' maxHeight='40px' w='100%'   >
        <Flex w='100%'>
          <Text ml={['32px','137px']} pt={['5px','12px']} pb={'4px','9px'} fontSize='12px'>Sell on Fuud Fair</Text>
          <Icon as={BiCheckShield} color='#fff' mt={'10px'} ml={['12px','192px']} mr={'13px'} boxSize={'22px'}/>
          <Text  pt={'12px'} pb={'9px'} fontSize='12px'>100% secure delivery without contacting the courier </Text>
          <Text  pt={'12px'} pb={'9px'} fontSize='12px' ml='16px' mr='13px'> ｜ </Text>
          <Text  pt={'12px'} pb={'9px'} fontSize='12px'> Need help? call us: +23470020045 </Text>
        </Flex>
      </Box>
      <Box bg='#fff' h='96px' w='100%' >
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
      <Box w='100vw'>
        <Flex >
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
      </Box>
      <Center>
        <Heading color='#27A599' fontSize='28px' fontWeight='600' font='poppins' mt='14px' >Checkout</Heading>
      </Center>
      <Center >
        <Flex >
          <Breadcrumb spacing="8px" separator={<ArrowForwardIcon color="gray.500"  />} mt='26px' >
            <BreadcrumbItem color='#27A599'  >
              <BreadcrumbLink href="/checkout">Billing Address </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color='#27A599'  >
              <BreadcrumbLink href="/shipping">Shipping Method</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color='#27A599'  >
              <BreadcrumbLink href="/payment">Payment Method</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Center>
      <Flex mt='79px' >
        <Box ml='100px' mr='236px'>
        <Heading
            fontSize="21px"
            fontWeight="600"
            font="poppins"
            color="#27A599"
            mb='14px'
          >
            Shipping Method
          </Heading>
          <Box  borderTop="1px solid #8F8F8F" >
            <Box pt='12px' pl='14px' w='611px' h='130px' bg='#fff' boxShadow='0px 4px 16px rgba(194, 194, 194, 0.1)' borderRadius='12px' mt='16px'>
              <Text color="#27A599" fontSize='14px' fontWeight='600' font='poppins'>ClickNShip</Text>
              <Flex>
                <Text color="#27A599" fontSize='14px' fontWeight='600' font='poppins' mt='11px'>Delivery Time:</Text>
                <Text fontSize='14px' color='#646464' fontWeight='600' font='poppins' ml='24px' mt='11px'> 2 Days-08/10/2021</Text>
                <Image  src={star} bg='black' w='109px' h='28px' mt='9px' ml='106px' />
                <RadioGroup defaultValue='2' mt='12px' ml='43px'>
                  <Stack spacing={5} direction='row'>
                    <Radio colorScheme='green'  value='1'></Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Flex>
                <Text color="#27A599" fontSize='14px' fontWeight='600' font='poppins' mt='11px'> Shipping Fees </Text>
                <Text color='#646464' fontSize='14px' fontWeight='600' font='poppins' ml='24px' mt='11px'> 600 </Text>
              </Flex>
            </Box>
            <Box pt='12px' pl='14px' mt='28px'  w='611px' h='130px' bg='#fff' boxShadow='0px 4px 16px rgba(194, 194, 194, 0.1)' borderRadius='12px' >
              <Text color="#27A599" fontSize='14px' fontWeight='600' font='poppins'> Pick Up</Text>
              <Flex>
                <Text color='#646464' fontSize='14px' fontWeight='600' font='poppins' mt='11px'> (No Shipping Fee)</Text>
                {/* <input type="radio" value="Male" color='#27A599' />  */}
                <RadioGroup defaultValue='1' mt='12px' ml='377px' >
                  <Stack spacing={5} direction='row'>
                    <Radio colorScheme='green'  value='2'></Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
            </Box>
            <Button
              h="48px"
              w="609px"
              bg="#FF9F1C"
              boxSizing="border-box"
              borderRadius="30px"
              border="1px solid #FF9F1C"
              boxShadow="0px 4px 4px rgba(194, 194, 194, 0.3)"
              color="#fff"
              mt="108px"
              onClick={()=> history.push("/payment")}
            >
              confirm
            </Button>
          </Box>
        </Box>
        <Box bg='#27A599' w='400px' h='491px' mr='94px'>
          <Heading fontSize='21px' fontWeight='600' font='poppins' color='#fff' ml='32px'  mt='25px'>Order Summary</Heading>
          <Flex>
            <Box bg='#fff' w='44px' height='57px' ml='32px' mt='8px'>
              <Image src={peak} mt='10px'></Image>
            </Box>
            <Box>
              <Text fontSize ='14px' fontWeight='400' mr='30px' mt='16px' ml='14px'> Peak Full Cream</Text>
              <Text fontSize ='14px' fontWeight='400' ml='14px'>1 pack</Text>
            </Box>
            <Text fontSize ='14px' fontWeight='400' mt='16px' > NGN 2500</Text>
          </Flex>
          <Box mt='27px' borderTop='1px solid #fff' borderBottom='1px solid #fff' ml='32px' mr='30px' >
            <Flex>
              <Box mt='16px'  mb='10px'>
                <Text fontSize ='14px'> Discount</Text>
                <Text fontSize ='14px'> Sub total</Text>
              </Box>
              <Box align='end' ml='100px' mt='16px'>
                <Text fontSize ='14px' ml='25px'> NGN 100</Text>
                <Text fontSize ='14px' ml='25px'> NGN 2400</Text>
              </Box>
            </Flex>
          </Box>
          <Box borderBottom='1px solid #fff' ml='32px' mr='30px'>
            <Flex borderBottom='1px solid #fff'  bg='#F5F5F5' color='#000' mt='4px' mb='4px' h='51px' alignItems='center'>
              <Text fontSize='12px' fontWeight='400' font='poppins' ml='9px'> Total</Text>
              <Text fontSize='16px' fontWeight='600' font='poppins' ml='130px'> NGN 2400</Text>
            </Flex>
          </Box>
          <Flex mt='32px' ml='32px' mr='30px'>
            <Input mr='4px' placeholder='coupon code' bg='#EDEDED' boxSizing='border-box' borderRadius='30px' border='1px solid #FFF'  color='#8F8F8F'></Input>
            <Button bg='#FF9F1C' boxSizing='border-box' borderRadius='20px' border='1px solid #FF9F1C' w='89px' h='40px'> Apply </Button>
          </Flex>
        </Box>
      </Flex>
      
    </Box  >
  );
}

export default ShippingMethod


