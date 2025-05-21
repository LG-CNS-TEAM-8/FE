import React, { useState, useEffect, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Box,
  Text,
  Spinner,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NewsListItem from "./NewsListItem";
import instance from "../api/axiosInstance";

const NewsListWithDialog = ({ articles, loading, contextLabel = "뉴스" }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [summary, setSummary] = useState("");
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [summaryError, setSummaryError] = useState(null);
  const focusRef = useRef(null);

  useEffect(() => {
    if (selectedIndex === null) {
      setSummary("");
      setSummaryError(null);
      setLoadingSummary(false);
      return;
    }

    const fetchSummary = async () => {
      setLoadingSummary(true);
      try {
        const accessToken = localStorage.getItem("accessToken");
        const res = await instance.post(
          "/news/summary",
          { link: articles[selectedIndex].link },
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

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" py={20}>
        <Spinner size="lg" mr={4} />
        <Text fontSize="lg">뉴스를 불러오는 중입니다...</Text>
      </Box>
    );
  }

  if (!articles?.length) {
    return <Text>뉴스가 없습니다.</Text>;
  }

  return (
    <>
      {articles.map((article, index) => (
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
                overflowY: "auto",
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
                }}
              >
                {contextLabel} #{index + 1} - {article.title}
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
                <Text mb={6} whiteSpace="pre-wrap">
                  {summary}
                </Text>
              )}

              <ChakraLink
                href={article.link}
                color="blue.500"
                isExternal
                mb={4}
                display="block"
              >
                {article.link}
              </ChakraLink>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ))}
    </>
  );
};

export default NewsListWithDialog;
