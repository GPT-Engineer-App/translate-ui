import { Container, SimpleGrid, Heading, Textarea, Button, Text, HStack, Box, Select, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("es");

  const handleTranslate = () => {
    // Placeholder for translation logic
    setTranslatedText(`Translated text from ${sourceLanguage} to ${targetLanguage} will appear here.`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="xl" mb={4}>Machine Translation UI</Heading>
      <HStack spacing={4} mb={4}>
        <FormControl>
          <FormLabel>Source Language</FormLabel>
          <Select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)} placeholder="Select source language">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Target Language</FormLabel>
          <Select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} placeholder="Select target language">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </Select>
        </FormControl>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} width="100%">
        <Textarea
          placeholder="Enter text to translate"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          size="md"
          fontSize="lg"
          p={4}
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