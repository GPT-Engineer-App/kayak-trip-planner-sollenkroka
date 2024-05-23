import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Placeholder for actual login logic
    if (email === "user@example.com" && password === "password") {
      toast({
        title: "Login successful.",
        description: "You have successfully logged in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        title: "Login failed.",
        description: "Invalid email or password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Login
      </Heading>
      <Text color={"gray.500"} mb={6}>
        Please enter your email and password to login.
      </Text>
      <Box maxW="md" mx="auto">
        <FormControl id="email" mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;