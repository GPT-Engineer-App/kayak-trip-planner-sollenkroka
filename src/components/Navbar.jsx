import { Box, Flex, Link, Button, useColorModeValue, Stack, IconButton, useDisclosure, HStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box fontWeight="bold" fontSize="xl">Kayaking Trip Planner</Box>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            <RouterLink to="/">
              <Button variant={"ghost"} colorScheme={"teal"} size={"sm"}>
                Home
              </Button>
            </RouterLink>
            <RouterLink to="/about">
              <Button variant={"ghost"} colorScheme={"teal"} size={"sm"}>
                About
              </Button>
            </RouterLink>
            <RouterLink to="/contact">
              <Button variant={"ghost"} colorScheme={"teal"} size={"sm"}>
                Contact
              </Button>
            </RouterLink>
            <RouterLink to="/login">
              <Button variant={"ghost"} colorScheme={"teal"} size={"sm"}>
                Login
              </Button>
            </RouterLink>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <RouterLink to="/login">
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              Login
            </Button>
          </RouterLink>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <RouterLink to="/">
              <Button variant={"ghost"} colorScheme={"teal"} size={"sm"}>
                Home
              </Button>
            </RouterLink>
            <RouterLink to="/about">
              <Button variant={"ghost"} colorScheme={"teal"} size={"sm"}>
                About
              </Button>
            </RouterLink>
            <RouterLink to="/contact">
              <Button variant={"ghost"} colorScheme={"teal"} size={"sm"}>
                Contact
              </Button>
            </RouterLink>
            <RouterLink to="/login">
              <Button variant={"ghost"} colorScheme={"teal"} size={"sm"}>
                Login
              </Button>
            </RouterLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;