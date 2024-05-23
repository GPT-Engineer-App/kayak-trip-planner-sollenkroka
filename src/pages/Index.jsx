import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Map from "../components/Map";

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Welcome to the Kayaking Trip Planner
      </Heading>
      <Text color={"gray.500"}>
        Plan your kayaking trips starting from Sollenkroka with ease.
      </Text>
      <Flex justify="center" mt={6}>
        <Button
          colorScheme="teal"
          variant="solid"
          size="lg"
          leftIcon={<FaMapMarkerAlt />}
        >
          View Map (Coming Soon)
        </Button>
      </Flex>
      <Box mt={10}>
        <Map />
      </Box>
    </Box>
  );
};

export default Index;