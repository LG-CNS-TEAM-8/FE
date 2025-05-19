import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import NewsListItem from "../components/NewsListItem";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Searchpage = () => {
  return (
    <Box>
      <NavBar />
      <Search />
      <Flex direction={"column"} alignItems={"start"} mx={12} mt={10}>
        <VStack mb={8} align={"start"}>
          <Text fontSize="2xl" fontWeight="bold" mb={1}>
            "검색어와 관련된 뉴스들"
          </Text>
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

export default Searchpage;
