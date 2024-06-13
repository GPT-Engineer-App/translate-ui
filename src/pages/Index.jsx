import { Container, SimpleGrid, Heading, Textarea, Button, Text, HStack, Box } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
    // Placeholder for translation logic
    setTranslatedText("Translated text will appear here.");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="xl" mb={4}>Machine Translation UI</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} width="100%">
        <Textarea
          placeholder="Enter text to translate"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          size="md"
        />
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg" bg="gray.50">
          <Text fontSize="lg" color="gray.700">{translatedText}</Text>
        </Box>
      </SimpleGrid>
      <Button colorScheme="blue" onClick={handleTranslate} mt={4}>Translate</Button>
    </Container>
  );
};

export default Index;