import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NewsList from "../components/NewsList"; // 경로 맞춰주세요

const Home = () => {
  return (
    <Box width={"100%"}>
      <NavBar />
      <Flex direction={"column"} alignItems={"start"} mx={12} mt={10}>
        <VStack align={"start"} mb={8}>
          <Text fontSize="3xl" fontWeight="bold">
            My News
          </Text>
          <Text color="gray.500">관련 키워드들...</Text>
        </VStack>

        <NewsList />
      </Flex>
      <Footer />
    </Box>
  );
};

export default Home;
