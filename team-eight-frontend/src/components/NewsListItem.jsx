import { Box, Flex, Text, Icon, Image } from "@chakra-ui/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

const NewsListItem = ({ title, description, thumbnail }) => {
  const [liked, setLiked] = useState(false);

  const handleHeartClick = (e) => {
    e.stopPropagation();
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
            aspectRatio={4 / 3}
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
              <Text
                fontSize="md"
                color="gray.600"
                mb={2}
                textAlign="left"
                noOfLines={3}
                maxW="400px"
              >
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
          onClick={handleHeartClick}
        />
      </Flex>
    </Box>
  );
};

export default NewsListItem;
