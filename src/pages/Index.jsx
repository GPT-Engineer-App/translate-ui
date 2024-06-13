import { Container, SimpleGrid, Heading, Textarea, Button, Text, HStack } from "@chakra-ui/react";
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
        <HStack width="100%" justifyContent="center">
          <Text fontSize="lg">{translatedText}</Text>
        </HStack>
      </SimpleGrid>
      <Button colorScheme="blue" onClick={handleTranslate} mt={4}>Translate</Button>
    </Container>
  );
};

export default Index;