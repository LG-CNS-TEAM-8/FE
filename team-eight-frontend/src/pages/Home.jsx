import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NewsList from "../components/NewsList"; // 경로 맞춰주세요
import { getUserInterests } from "../api/user_api";
import React, { useEffect, useState } from "react";
import MyPagination from "../components/MyPagination";

const Home = () => {
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const data = await getUserInterests();
        setInterests(data);
      } catch {
        setInterests([]);
      }
    };
    fetchInterests();
  }, []);

  return (
    <Box width="100%" minHeight="100vh" display="flex" flexDirection="column">
      <NavBar />
      <Flex direction="column" alignItems="start" mx={12} mt={0} flex="1">
        <VStack mx={4} align="start" mb={8}>
          <Text fontSize="3xl" fontWeight="bold">
            AI 큐레이션 실시간 뉴스
          </Text>
          <Text color="gray.500">
            {interests.length > 0
              ? interests.map(i => i.name).join(", ")
              : "관심 키워드를 아직 설정하지 않으셨습니다."}
          </Text>
        </VStack>
        <NewsList url={`/news/ai`} />
      </Flex>
      <Footer />
    </Box>
  );
};

export default Home;
