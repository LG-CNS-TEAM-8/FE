import { useEffect, useState } from "react";
import axios from "axios";
import TestListItem from "./TestListItem";  // 경로 맞게 수정
import { Box, Text } from "@chakra-ui/react";

const TestList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("/news"); // 백엔드 API 주소 맞게 수정
        console.log("뉴스 응답:", res.data);
        setArticles(res.data);
      } catch (err) {
        console.error("뉴스 불러오기 실패:", err);
      }
    };

    fetchNews();
  }, []);

  return (
    <Box p={6}>
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        🗞 최신 뉴스
      </Text>
      {Array.isArray(articles) && articles.length > 0 ? (
        articles.map((article, index) => (
          <TestListItem
            key={index}
            title={article.title}
            description={article.description}
            articleUrl={article.link}
            thumbnail={article.thumbnail}
            liked={false} // 좋아요 상태 관리 필요 시 따로 구현 가능
          />
        ))
      ) : (
        <Text>뉴스가 없습니다.</Text>
      )}
    </Box>
  );
};

export default TestList;
