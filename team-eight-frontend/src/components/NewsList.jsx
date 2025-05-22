import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import NewsDialog from "../components/NewsDialog";
import instance from "../api/axiosInstance";

const NewsList = ({ url }) => {
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const res = await instance.get(`${url}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setArticles(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingArticles(false);
      }
    };

    // url이 바뀌면 뉴스 다시 fetch
    setLoadingArticles(true); // 새 요청 시작 시 로딩 상태로 초기화
    fetchNews();
  }, [url]);

  return (
    <Box p={4} width="100%">
      <NewsDialog
        articles={articles}
        loading={loadingArticles}
      />
    </Box>
  );
};

export default NewsList;
