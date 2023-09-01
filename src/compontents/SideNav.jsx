import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { PiArrowsInSimpleBold } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { Link} from "react-router-dom";



const SideNav = () => {
  const navLink = [
    {
      icons: BiSolidDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icons: PiArrowsInSimpleBold,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      bg="#fff"
      justifyContent="space-between"
      h="100vh"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
    >
      <Box>
        <Heading as="h1" pt="3.5rem" fontSize="20px" textAlign="center">
          Do Code!
        </Heading>

        <Box mt="6" mx="4">
          {navLink.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="10px"
                px="4"
                py="3"
                _hover={{
                  bg: "#f3f3f7",
                  color: "#171717",
                }}
                color="#797E82"
              >
                <Icon as={nav.icons} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="4" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            px="4"
            py="3"

            _hover={{
              bg: "#f3f3f7",
              color: "#171717",
            }}color="#797E82"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
