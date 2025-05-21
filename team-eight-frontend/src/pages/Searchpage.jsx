import React, { useState, useEffect } from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Search from "../components/Search";
import NewsDialog from "../components/NewsDialog";
import instance from "../api/axiosInstance";

const Searchpage = () => {
  const [keyword, setKeyword] = useState("");
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!keyword.trim()) return;

    const fetchNews = async () => {
      setLoading(true);
      try {
        const accessToken = localStorage.getItem("accessToken");
        const res = await instance.get(
          `/news/search/${encodeURIComponent(keyword)}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setNewsList(res.data);
      } catch (err) {
        console.error("검색 오류:", err);
        setNewsList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [keyword]);

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
          <NewsDialog
            articles={newsList}
            loading={loading}
            contextLabel={`"${keyword}" 뉴스`}
          />
        )}
      </Flex>
      <Footer />
    </Box>
  );
};

export default Searchpage;
