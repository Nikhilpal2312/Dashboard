import { Box, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {FaUserCircle} from "react-icons/fa";
import {HiMenu} from "react-icons/hi";

const TopNav = ({title, onOpen}) => {
  return (
    <Box px='4' bg='#fff'>
        <HStack maxW='70rem' mx='auto'  height='16' justifyContent='space-between' px="10">
            <Icon as={HiMenu} onClick={onOpen} 
            display={{
                base: "block",
                lg: "none",
            }}/>
        <Heading fontSize='20px'>{title}</Heading>
        <Menu>
          <MenuButton>
            <Icon fontSize='28px' as={FaUserCircle}/>
          </MenuButton>
          <MenuList>    
            <MenuItem>Support</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
    </HStack>
    </Box>
  );
};

export default TopNav;
