import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NewsList from "../components/NewsList"; // 경로 맞춰주세요
import { jwtDecode } from "jwt-decode";

const MypageFavorites = () => {
  const accessToken = localStorage.getItem("accessToken");
  const decode = jwtDecode(accessToken);
  const userId = decode?.userId;

  return (
    <Flex direction="column" minHeight="100vh">
      <Box>
        <NavBar />
      </Box>

      <Box flex="1" mx={12} mt={10}>
        <VStack mx={4} align="start" mb={8}>
          <Text fontSize="3xl" fontWeight="bold">
            좋아요를 누른 뉴스들
          </Text>
        </VStack>
        {userId && <NewsList url={`/${userId}/favorites`} />}
      </Box>

      <Footer />
    </Flex>
  );
};

export default MypageFavorites;
