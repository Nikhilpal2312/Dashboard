import { Card, Stack } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../../DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import {IoMdMailOpen} from 'react-icons/io';
import { BsFillChatFill } from 'react-icons/bs'
import CardInfo from '../dashboard/components/CardInfo'

const Support = () => {
  return (
   <DashboardLayout title='Support'>
     
    <Stack spacing="5rem">
    <SupportCard icon= {IoMdMailOpen} leftComponent={<ContactCard/>} title ="Contact Us" text="Have a question or just want to know more? Feel free to reach out to
          us."/>

<SupportCard icon= {BsFillChatFill} leftComponent={<CardInfo
 imgUrl="/Visual.svg"
 text="Learn more about our real estate, mortgage, and  corporate account services"
 tagText="Contact"
 inverted={true}


/>} title ="Live Chat" text="Don’t have time to wait for the answer? Chat with us now."/>
  
    </Stack>


    </DashboardLayout>
  )
}

export default Support
