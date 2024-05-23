import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        About Kayaking Trip Planner
      </Heading>
      <Text color={"gray.500"}>
        The Kayaking Trip Planner helps you plan your kayaking trips starting from Sollenkroka. You can explore routes, connect with fellow kayakers, and share your experiences.
      </Text>
    </Box>
  );
};

export default About;