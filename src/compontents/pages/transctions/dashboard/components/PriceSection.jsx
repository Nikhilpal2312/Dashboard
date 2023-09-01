import React from "react";
import { CustomCard } from "../../../../../assets/Chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="0.875rem" fontWeight="medium">
              Total Price
            </Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              xl: "row",
            }}
          >
            <Text color="black" fontSize="18px">
              ₹26,670.25
            </Text>

            <HStack>
              <Icon as={GoArrowUpRight} />
              <Text color="green" fontStyle="medium" fontSize="16px">
                0.04%
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Sell</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Buy</Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded">
       <Flex justify='end'>
       <TabList bg='blackAlpha.50' p='3px'>
                    {
                        ["1D", "1W", "1M", "1Y"].map((tab)=>
                        <Tab _selected={{ bg: 'white'
                        }} key={tab} fontSize='sm' p='6px' borderRadius="4">
                            {tab}
                        </Tab>
                        )
                    }
        </TabList>
       </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="./graph.svg" w="100%" mt="3rem" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="#171717">
                  {timestamp}
                </Text>
              ))}
              ;
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
