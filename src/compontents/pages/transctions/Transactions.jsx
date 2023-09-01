import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../DashboardLayout";
import { BsDownload } from "react-icons/bs";
import {BiSearch} from "react-icons/bi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";

const TransactionsPage = () => {
  const tabs = [
    {
      name: "All",
      count: "349",
    },
    {
      name: "Deposit",
      count: "144",
    },
    {
      name: "Withdraw",
      count: "213",
    },
    {
      name: "Trade",
      count: "22",
    },
  ];

  return (
    <>
      <DashboardLayout title="Transactions">
        <Flex justify="end" mt="6" mb="3">
          <Button leftIcon={<BsDownload />}>Export ESV</Button>
        </Flex>
        <Card borderRadius="1rem">
          <Tabs>
            <TabList pt="6"  width='full' display='flex'justifyContent='space-between' >
             <HStack>
             {tabs.map((tabs) => (
                <Tab key={tabs.name} display="flex" gap="2" pb='4'>
                  {tabs.name}{""}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tabs.count}
                  </Tag>
                </Tab>
              ))}
             </HStack>
              <InputGroup maxW='200px'pr='6' >
                <InputLeftElement pointerEvents="none">
                  <Icon as={BiSearch} />
                </InputLeftElement>
                <Input type="text" placeholder="Search by ID or destination" />
              </InputGroup>
            </TabList>

            <TabPanels>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </DashboardLayout>
    </>
  );
};

export default TransactionsPage;
