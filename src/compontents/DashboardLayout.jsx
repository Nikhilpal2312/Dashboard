import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import SideDrower from "./SideDrower";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex>
        <Box  
        display=
          {{
            base: "none",
            lg: "flex",
          }}>
         
          <SideNav />
        </Box>

        <SideDrower isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen} />
          <Container overflow='auto' overflowX='hidden' h='calc(100vh - 88px)' mt='6' maxW="70rem" px="10">
            {children}
          </Container>
        </Box>
      </Flex>
    </>
  );
};

export default DashboardLayout;
