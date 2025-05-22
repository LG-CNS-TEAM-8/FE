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
        console.log(res);
        setArticles(res.data.newsList);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingArticles(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <Box p={4} width="100%">
      <NewsDialog
        articles={articles}
        loading={loadingArticles}
        contextLabel="AI 추천 뉴스"
      />
    </Box>
  );
};

export default NewsList;
