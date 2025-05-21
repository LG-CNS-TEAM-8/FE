import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
  Grid,
  GridItem,
  Image,
  VStack,
  Wrap,
  WrapItem,
  Tag,
} from "@chakra-ui/react";

import { CiSettings } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

import useUser from "../lib/useUser";
import { getUserFavorites, getUserInterests } from "../api/user_api";
import { useEffect, useState } from "react";

const Mypage = () => {
  const { userLoading, user, isLoggedIn } = useUser();
  const [interestsRes, setInterestsRes] = useState([]);
  const [favoritesRes, setFavoritesRes] = useState([]);

  useEffect(() => {
    const favorites = async () => {
      try {
        const res = await getUserFavorites();
        setFavoritesRes(res);
      } catch (err) {
        console.error("❌ 유저 최애 가져오기 실패 ❌:", err);
      }
    };
    const interests = async () => {
      try {
        const res = await getUserInterests();
        setInterestsRes(res);
      } catch (err) {
        console.error("❌ 유저 최애 가져오기 실패 ❌:", err);
      }
    };
    favorites();
    interests();
  }, []);

  return (
    <>
      <NavBar />
      <Box px={16} minH="100vh">
        {/* 상단 프로필 영역 */}
        <Flex
          bg="gray.100"
          p={10}
          borderRadius="2xl"
          justify="space-between"
          mb={10}
        >
          <Flex align="center">
            <CgProfile size={180} />
            <Flex ml={8} direction={"column"} align={"start"}>
              <Text fontWeight="bold" fontSize="xl">
                {userLoading ? "Loading" : user?.name}
              </Text>
              <Text color="gray.600">
                {userLoading ? "Loading" : user?.email}
              </Text>
              <Text mt={4} mb={2} fontWeight="bold">
                관심 키워드들
              </Text>
              <Wrap mb={6} justify="start">
                {interestsRes.map((k, index) => (
                  <WrapItem mr={1} key={index}>
                    <Tag.Root size="xl" borderRadius="md" variant="outline">
                      <Tag.Label>{k.name}</Tag.Label>
                    </Tag.Root>
                  </WrapItem>
                ))}
              </Wrap>
            </Flex>
          </Flex>
          <VStack justify={"space-between"} align={"end"}>
            <Link to={"/mypage/settings"}>
              <Icon
                as={CiSettings}
                boxSize={8}
                color="gray.400"
                _hover={{
                  color: "gray.600",
                  transform: "scale(1.05)",
                  cursor: "pointer",
                }}
              />
            </Link>
            <Link to="/mypage/edit">
              <Button
                _hover={{
                  color: "gray.500",
                  transform: "scale(1.05)",
                  cursor: "pointer",
                }}
              >
                회원정보수정
              </Button>
            </Link>
          </VStack>
        </Flex>
        {/* 하단 뉴스 카드 영역 */}
        <Box
          border={"1px solid "}
          borderColor={"gray.200"}
          p={8}
          borderRadius="xl"
        >
          <Flex justify={"space-between"}>
            <Text fontSize={20} fontWeight="bold" mb={5}>
              좋아요를 누른 뉴스들
            </Text>
            <Icon
              as={FaPlus}
              boxSize={6}
              color="gray.400"
              _hover={{
                color: "gray.600",
                transform: "scale(1.05)",
                cursor: "pointer",
              }}
            />
          </Flex>

          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            rowGap={12}
            columnGap={8}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <GridItem
                key={item}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="md"
              >
                <Box
                  bg="gray.200"
                  height="180px"
                  borderRadius="md"
                  mb={3}
                ></Box>
                <Text fontWeight="bold" fontSize={"xl"}>
                  Title
                </Text>
                <Text fontSize="sm" color="gray.600" mt={1}>
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very short story.
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Mypage;
