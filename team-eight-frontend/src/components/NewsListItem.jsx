import { useState } from "react";
import { Box, Flex, Text, Icon, Image } from "@chakra-ui/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const NewsListItem = ({ title, description, thumbnail, initiallyLiked }) => {
  const [liked, setLiked] = useState(initiallyLiked || false);

  // 뉴스 다이얼로그 열리는 함수 예시 (외부에서 내려받거나)
  const openNewsDialog = () => {
  };

  // 뉴스 아이템 클릭 시 다이얼로그 열기
  const handleItemClick = () => {
    openNewsDialog();
  };

  // 하트 클릭 시 liked 상태 토글, 이벤트 버블링 막기
  const handleHeartClick = (e) => {
    e.stopPropagation(); // 하트 클릭 시 부모 클릭 이벤트 막음(뉴스 다이얼로그 안 뜨게)
    setLiked(!liked);
  };

  return (
    <Box
      width={"100%"}
      height={250}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mb={6}
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
      onClick={handleItemClick}  // 뉴스 다이얼로그 열기용 클릭 이벤트
      cursor="pointer"
    >
      <Flex mx={2} height={"100%"} justify="space-between" align="center">
        <Flex>
          <Box
            width="260px"
            borderRadius="md"
            overflow="hidden"
            ml={2}
            mr={8}
            mt={1}
            mb={1}
            aspectRatio={4 / 3} // 4:3 비율 유지
          >
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt="뉴스 썸네일"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            ) : (
              <Box width="100%" height="100%" bg="gray.100" />
            )}
          </Box>
          <Box pr={8}>
            <Flex direction={"column"} alignItems={"start"}>
              <Text fontWeight="bold" fontSize="2xl" mb={2}>
                {title}
              </Text>
              <Text fontSize="md" color="gray.600" mb={2} textAlign={"left"}>
                {description}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Icon
          mt={40}
          mr={2}
          as={liked ? FaHeart : FaRegHeart}
          boxSize={8}
          color={liked ? "red.500" : "gray.400"}
          cursor="pointer"
          onClick={handleHeartClick} // 하트 클릭 이벤트 연결
        />
      </Flex>
    </Box>
  );
};

export default NewsListItem;
