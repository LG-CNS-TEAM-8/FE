import React, { useState } from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Search from "../components/Search";
import NewsList from "../components/NewsList"; // 뉴스 리스트 재사용 컴포넌트

const Searchpage = () => {
  const [keyword, setKeyword] = useState("");
  const handleSearch = (searchKeyword) => setKeyword(searchKeyword);

  return (
    <Box>
      <NavBar />
      <Search onSearch={handleSearch} />
      
      <Flex direction="column" mx={12} mt={10}>
        <VStack mb={8} align="start">
          <Text fontSize="2xl" fontWeight="bold" mb={1}>
            {keyword
              ? `"${keyword}" 관련 뉴스들`
              : "검색어를 입력하고 검색 버튼을 눌러주세요."}
          </Text>
        </VStack>

        {keyword && (
          <NewsList
            url={`/news/search/${encodeURIComponent(keyword)}`}
            contextLabel={`"${keyword}" 뉴스`}
          />
        )}
      </Flex>
      <Footer />
    </Box>
  );
};

export default Searchpage;
