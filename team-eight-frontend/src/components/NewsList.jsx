import { useEffect, useState, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Box,
  Text,
  Image,
  Link as ChakraLink,
  Spinner,
} from "@chakra-ui/react";
import NewsListItem from "./NewsListItem";
import instance from "../api/axiosInstance";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(true); // ✅ 로딩 상태
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [summary, setSummary] = useState("");
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [summaryError, setSummaryError] = useState(null);

  const focusRef = useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const res = await instance.get("/news/ai", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setArticles(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingArticles(false); // ✅ 로딩 종료
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (selectedIndex === null) {
      setSummary("");
      setSummaryError(null);
      setLoadingSummary(false);
      return;
    }
    const fetchSummary = async () => {
      setLoadingSummary(true);
      setSummaryError(null);
      try {
        const accessToken = localStorage.getItem("accessToken");
        const article = articles[selectedIndex];
        const res = await instance.post(
          "/news/summary",
          {
            link: article.link,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setSummary(res.data.summary);
      } catch (err) {
        console.error(err);
        setSummaryError("요약을 불러오는 데 실패했습니다.");
      } finally {
        setLoadingSummary(false);
      }
    };
    fetchSummary();
  }, [selectedIndex, articles]);

  useEffect(() => {
    if (selectedIndex !== null) {
      focusRef.current?.focus();
    }
  }, [selectedIndex]);

  return (
    <Box p={4} width={"100%"}>
      {loadingArticles ? (
        <Box display="flex" justifyContent="center" alignItems="center" py={20}>
          <Spinner size="lg" mr={4} />
          <Text fontSize="lg">뉴스를 불러오는 중입니다...</Text>
        </Box>
      ) : articles.length === 0 ? (
        <Text>뉴스가 없습니다.</Text>
      ) : (
        articles.map((article, index) => (
          <Dialog.Root
            key={article.link}
            open={selectedIndex === index}
            onOpenChange={(open) => {
              if (!open) setSelectedIndex(null);
            }}
          >
            <Box onClick={() => setSelectedIndex(index)} cursor="pointer">
              <Dialog.Trigger asChild>
                <NewsListItem
                  title={article.title}
                  description={article.description}
                  thumbnail={article.thumbnail}
                  initiallyLiked={false}
                />
              </Dialog.Trigger>
            </Box>

            <Dialog.Portal>
              <Dialog.Overlay
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  position: "fixed",
                  inset: 0,
                }}
              />
              <Dialog.Content
                style={{
                  backgroundColor: "white",
                  borderRadius: 8,
                  padding: 24,
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "95%",
                  maxWidth: "640px",
                  maxHeight: "80vh",
                  minHeight: 300,
                  overflowY: "auto",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  tabIndex={-1}
                  ref={focusRef}
                  style={{
                    outline: "none",
                    width: 0,
                    height: 0,
                    position: "absolute",
                  }}
                />

                <Dialog.Close asChild>
                  <Box
                    as="button"
                    position="absolute"
                    top="0px"
                    right="10px"
                    fontSize="1.5rem"
                    fontWeight="bold"
                    background="none"
                    border="none"
                    cursor="pointer"
                    _hover={{ color: "red.500" }}
                    aria-label="닫기"
                    tabIndex={-1}
                  >
                    ×
                  </Box>
                </Dialog.Close>

                <Dialog.Title
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    marginRight: "10px",
                  }}
                >
                  뉴스 #{index + 1} - {article.title}
                </Dialog.Title>

                <Text fontSize="sm" color="gray.500" mb={4}>
                  {`${new Date().getFullYear()}년 ${
                    new Date().getMonth() + 1
                  }월 ${new Date().getDate()}일`}
                </Text>

                <Image
                  src={article.thumbnail}
                  borderRadius="md"
                  mb={8}
                  width="100%"
                  maxWidth="400px"
                  objectFit="contain"
                  mx="auto"
                />

                {loadingSummary ? (
                  <Box
                    mb={4}
                    minHeight="100px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={6}
                  >
                    <Spinner size="md" />
                    <Text>뉴스 내용을 요약 중입니다.</Text>
                  </Box>
                ) : summaryError ? (
                  <Text color="red.500" mb={4}>
                    {summaryError}
                  </Text>
                ) : (
                  <Text
                    mb={6}
                    minHeight="100px"
                    bg="transparent"
                    whiteSpace="pre-wrap"
                  >
                    {summary}
                  </Text>
                )}

                <ChakraLink
                  href={article.link}
                  color="blue.500"
                  isExternal
                  mb={4}
                  display="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.link}
                </ChakraLink>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))
      )}
    </Box>
  );
};

export default NewsList;
