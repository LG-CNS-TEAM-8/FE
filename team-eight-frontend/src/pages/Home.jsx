import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import NewsListItem from "../components/NewsListItem";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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

        {/* 나중에 데이터들을 리스트로 받아서 map으로 호출 */}
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
      <Footer />
    </Box>
  );
};

export default Home;
