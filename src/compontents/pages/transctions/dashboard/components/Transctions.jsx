import React, { Fragment } from 'react'
import { CustomCard } from '../../../../../assets/Chakra/CustomCard'
import { Box, Button, Divider, Flex, Grid, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { BsCurrencyRupee } from 'react-icons/bs'; 
import { FaBtc } from 'react-icons/fa';

const Transctions = () => {

    
const transction =[
    {
    id:"1",
      icon:BsCurrencyRupee,
      text:"INR Deposit",
      amount:"+ ₹81,123.10",
      timestamp:"2022-06-09 7:06 PM",
    },
    {
      id:"2",  
      icon:FaBtc,
      text:"BTC Sell",
      amount:"- 12.48513391 BTC",
      timestamp:"2022-05-27 12:32 PM",
    },
    {
      id:"3",   
      icon:BsCurrencyRupee,
      text:"INR Deposit",
      amount:"+ ₹81,123.10",
      timestamp:"2022-06-09 7:06 PM",
    }
  ]
  
  
  return (

    <CustomCard h='full'>
        <Text mb="6" fontSize='md' color='black.800'>Recent Transactions</Text>
        <Stack spacing={4}>
        {transction.map((transaction, i)=>
     <Fragment key={transaction.id} >
        { i != 0  && <Divider/>}
         <Flex gap={4}>
        <Grid placeItems='center' bg='#f3f3f7' boxSize={10} borderRadius='full'>
            <Icon as ={transaction.icon} />
        </Grid>
        <Flex justify='space-between' w='full'>
            <Stack spacing={0}>
                <Text textStyle='h6'>
                    {transaction.text}
                </Text>
                <Text fontSize='sm' color='black.40'>
                    {transaction.timestamp}
                </Text>
            </Stack>
            <Text textStyle='h6'>
                    {transaction.amount}
                </Text>

        </Flex>
      </Flex>
     </Fragment>
    )
  }
        </Stack>
      <Button colorScheme='gray' w='full' mt='6'>View All</Button>
    </CustomCard>
  )
}

export default Transctions;
