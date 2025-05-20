import { Box, Flex, Text, Button, Icon, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const NewsListItem = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Box
      width={"100%"}
      height={300}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mb={6}
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
    >
      <Flex mx={2} height={"100%"} justify="space-between" align="center">
        <Flex>
          {/* 이미지로 교체하기 */}
          <Box boxSize="240px" bg="gray.100" borderRadius="md" ml={2} mr={8} />
          <Box>
            <Flex direction={"column"} alignItems={"start"}>
              <Text fontWeight="bold" fontSize="2xl" mb={2}>
                TITLE {/* Title Data로 교체 */}
              </Text>
              <Text fontSize="md" color="gray.600" mb={2}>
                DESC {/* Description Data로 교체 */}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <IconButton
          variant={"plain"}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          mt={48}
          mr={2}
          as={isLiked ? FaHeart : FaRegHeart}
          boxSize={8}
          color={isLiked ? "red.500" : "gray.400"}
          cursor="pointer"
        />
      </Flex>
    </Box>
  );
};
export default NewsListItem;
