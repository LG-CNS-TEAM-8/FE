import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Image, Text, Spinner, Center } from "@chakra-ui/react";

const ThumbnailTest = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThumbnail = async () => {
      const accessToken = localStorage.getItem("accessToken");
      try {
        // proxy 설정 덕분에 localhost:8080으로 자동 프록시 됩니다.
        const res = await axios.get("/news", {
          params: {
            path: "https://n.news.naver.com/mnews/article/018/0006018373",
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log("썸네일 URL:", res.data.thumbnail || res.data);
        setThumbnailUrl(res.data.thumbnail || res.data);
      } catch (err) {
        console.error("썸네일 요청 실패:", err);
        setError(err.message || "요청 중 에러 발생");
      }
    };

    fetchThumbnail();
  }, []);

  return (
    <Box p={8}>
      <Text fontSize="2xl" mb={6} fontWeight="bold">
        🖼️ 뉴스 썸네일 테스트
      </Text>

      {error ? (
        <Text color="red.500">❌ 에러 발생: {error}</Text>
      ) : thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          alt="뉴스 썸네일"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          boxShadow="md"
        />
      ) : (
        <Center>
          <Spinner size="lg" />
          <Text ml={3}>로딩 중...</Text>
        </Center>
      )}
    </Box>
  );
};

export default ThumbnailTest;
