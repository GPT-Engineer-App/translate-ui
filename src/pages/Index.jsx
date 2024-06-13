import { Container, VStack, Heading, Textarea, Button, Text, HStack } from "@chakra-ui/react";
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
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Machine Translation UI</Heading>
        <Textarea
          placeholder="Enter text to translate"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          size="md"
        />
        <Button colorScheme="blue" onClick={handleTranslate}>Translate</Button>
        <HStack width="100%" justifyContent="center">
          <Text fontSize="lg">{translatedText}</Text>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;