import React, { useState } from "react";
import { Container, Button, VStack, Text, Image, Box } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Index = () => {
  const [user, setUser] = useState(null);

  // Mock sign-in function
  const handleSignIn = () => {
    // Mock user data
    const mockUser = {
      id: "1029384756",
      name: "John Doe",
      imageUrl: 'https://images.unsplash.com/photo-1713238392341-92fb2cdc12de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTUzMDUwMzN8MA&ixlib=rb-4.0.3&q=80&w=1080',
      email: "john.doe@example.com",
    };
    setUser(mockUser);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {!user ? (
          <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={handleSignIn}>
            Sign in with Google
          </Button>
        ) : (
          <Box textAlign="center">
            <Image borderRadius="full" boxSize="100px" src={user.imageUrl} alt="Profile image" />
            <Text fontSize="xl" fontWeight="bold">
              {user.name}
            </Text>
            <Text fontSize="md">{user.email}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;