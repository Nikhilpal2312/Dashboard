import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import {BsArrowBarDown, BsArrowBarUp} from 'react-icons/bs';

const PortfolioSection = () => {
  return (
    <HStack justify='space-between' bg='white' p='6' borderRadius='xl' spacing='16px' 
    
    align={{
        base: 'flex-start',
        xl: 'center',
    }}
    flexDir={{
        base:"column",
        xl:"row",

    }}
    Spacing={{
        base:"4",
        xl:"0",
      }}
    >
      <HStack 
      spacing={{
        base:"0",
        xl:"16",
      }}
      align={{
        base: 'flex-start',
        xl: 'center',
    }}
    flexDir={{
        base:"column",
        xl:"row",

    }}>
      <Stack>
        <HStack color='black.80'>
            <Text fontSize='0.875rem' fontWeight='medium'>Total Portfolio Values 
                <Icon as={BiInfoCircle} />
            </Text>
        </HStack>
        <Text color='black' fontSize='18px'>₹ 112,312.24</Text>
      </Stack>
      <Stack>
        <HStack color='black.80'>
            <Text fontSize='0.875rem' fontWeight='medium'>Wallet Balances </Text>
        </HStack>
       <HStack spacing={2} 
       align={{
        base: 'flex-start',
        sm: 'center',
    }}
    flexDir={{
        base:"column",
        xl:"row",

    }}>
       <Text color='black' fontSize='18px'>22.39401000</Text><Tag>BTC</Tag>
        <HStack>
        <Text color='black' fontSize='18px'>₹ 1,300.00</Text><Tag>INR</Tag>
        </HStack>
        
       </HStack>
      </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={BsArrowBarDown}/> } >Deposit</Button>
        <Button leftIcon={<Icon as={BsArrowBarUp}/>}>Withdraw</Button>
      </HStack>
    </HStack>
  )
}

export default PortfolioSection
