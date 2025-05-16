import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const NewsListItem = () => {
  return (
    <Box
      width={"100%"}
      height={200}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mb={4}
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
    >
      <Flex mx={2} height={"100%"} justify="space-between" align="center">
        <Flex>
          {/* 이미지로 교체하기 */}
          <Box boxSize="160px" bg="gray.100" borderRadius="md" mr={8} />
          <Box>
            <Flex direction={"column"} alignItems={"start"}>
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                TITLE {/* Title Data로 교체 */}
              </Text>
              <Text fontSize="sm" color="gray.600" mb={2}>
                DESC {/* Description Data로 교체 */}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Icon
          mt={32}
          as={true ? FaHeart : FaRegHeart}
          boxSize={5}
          color={true ? "red.500" : "gray.400"}
          cursor="pointer"
        />
      </Flex>
    </Box>
  );
};
export default NewsListItem;
