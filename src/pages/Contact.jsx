import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Contact Us
      </Heading>
      <Text color={"gray.500"}>
        If you have any questions or feedback, feel free to reach out to us at contact@kayakingplanner.com.
      </Text>
    </Box>
  );
};

export default Contact;