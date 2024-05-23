import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, useToast } from "@chakra-ui/react";
import { client } from "../../lib/crud";

const Plan = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();

  const handleSavePlan = async () => {
    const plan = { title, description };
    const success = await client.set(`plan:${title}`, plan);

    if (success) {
      toast({
        title: "Plan saved.",
        description: "Your kayaking trip plan has been saved.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTitle("");
      setDescription("");
    } else {
      toast({
        title: "Save failed.",
        description: "There was an error saving your plan.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Write Your Kayaking Trip Plan
      </Heading>
      <Box maxW="md" mx="auto">
        <FormControl id="title" mb={4}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl id="description" mb={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSavePlan}>
          Save Plan
        </Button>
      </Box>
    </Box>
  );
};

export default Plan;