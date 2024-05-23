import { Box, Flex, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Kayaking Trip Planner</Box>
        <Flex alignItems={"center"}>
          <RouterLink to="/">
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              Home
            </Button>
          </RouterLink>
          <RouterLink to="/about">
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              About
            </Button>
          </RouterLink>
          <RouterLink to="/contact">
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              Contact
            </Button>
          </RouterLink>
          <RouterLink to="/login">
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              Login
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;