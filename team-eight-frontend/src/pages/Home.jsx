import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import NewsListItem from "../components/NewsListItem";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Flex
      direction={"column"}
      alignItems={"start"}
      maxW="4xl"
      mx="auto"
      mt={10}
    >
      <VStack>
        <Text fontSize="2xl" fontWeight="bold" mb={1}>
          My News
        </Text>
        <Text color="gray.500" mb={6}>
          관련 키워드들...
        </Text>
      </VStack>

      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
    </Flex>
  );
};

export default Home;
