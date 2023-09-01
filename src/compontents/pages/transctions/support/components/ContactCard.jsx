import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
        <Stack spacing={6}>
          <Text textStyle="h6" color="black.10" fontWeight="medium">
            You will receive response within 24 hours of time of submit.
          </Text>
          <HStack
            flexDir={{
              base: "column",
              ms: "row",
            }}
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input fontSize="sm" placeholder="Enter Your Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input fontSize="sm" placeholder="Enter Your Surname" />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                fontSize="sm"
                type="email"
                placeholder="Please Enter Your Mail"
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea fontSize="sm" placeholder="Leave a Message" />
            </FormControl>
          </HStack>

          <Checkbox defaultChecked>
            <Text fontSize="sm">
              I Agree with
              <Box as="span" color="p.purple">
                Terms & Conditions.
              </Box>
            </Text>
          </Checkbox>
          <Stack>
            <Button colorScheme="purple">Send a Message</Button>
            <Button colorScheme="gray">Book a Meeting</Button>
          </Stack>
        </Stack>
      </Card>
  )
}

export default ContactCard
