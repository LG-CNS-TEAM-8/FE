import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NewsList from "../components/NewsList"; // 경로 맞춰주세요
import { jwtDecode } from "jwt-decode";

const MypageFavorites = () => {
  const accessToken = localStorage.getItem("accessToken");
  console.log("accessToken : " + accessToken);
  const decode = jwtDecode(accessToken);
  console.log("userId : " + decode.userId);
  return (
    <Box width={"100%"}>
      <NavBar />
      <Flex direction={"column"} alignItems={"start"} mx={12} mt={10}>
        <VStack mx={4} align={"start"} mb={8}>
          <Text fontSize="3xl" fontWeight="bold">
            좋아요를 누른 뉴스들
          </Text>
        </VStack>
        <NewsList url={`/${decode.userId}/favorites`} />
      </Flex>
      <Footer />
    </Box>
  );
};

export default MypageFavorites;
