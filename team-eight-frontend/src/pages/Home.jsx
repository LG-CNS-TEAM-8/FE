import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NewsList from "../components/NewsList"; // 경로 맞춰주세요
import MyPagination from "../components/MyPagination";
import { useState } from "react";

const Home = () => {
  return (
    <Box width={"100%"}>
      <NavBar />
      <Flex direction={"column"} alignItems={"start"} mx={12} mt={10}>
        <VStack mx={4} align={"start"} mb={8}>
          <Text fontSize="3xl" fontWeight="bold">
            My News
          </Text>
          <Text color="gray.500">관련 키워드들...</Text>
        </VStack>
        <NewsList url={`/news/ai/1`} />
      </Flex>
      <Button size={"xl"} variant={"outline"}>
        더보기
      </Button>
      <Footer />
    </Box>
  );
};

export default Home;
