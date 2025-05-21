import { Box, Flex, Text, Icon, Image } from "@chakra-ui/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const TestListItem = ({ articleUrl, title, description, thumbnail, liked }) => {
  return (
    <Box
      width="100%"
      height={300}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mb={6}
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
    >
      <Flex mx={2} height="100%" justify="space-between" align="center">
        <Flex>
          <Box ml={2} mr={8}>
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt="뉴스 썸네일"
                boxSize="240px"
                borderRadius="md"
                objectFit="cover"
              />
            ) : (
              <Box boxSize="240px" bg="gray.100" borderRadius="md" />
            )}
          </Box>
          <Box>
            <Flex direction="column" alignItems="start">
              <Text fontWeight="bold" fontSize="2xl" mb={2}>
                {title}
              </Text>
              <Text fontSize="md" color="gray.600" mb={2}>
                {description}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Icon
          mt={48}
          mr={2}
          as={liked ? FaHeart : FaRegHeart}
          boxSize={8}
          color={liked ? "red.500" : "gray.400"}
          cursor="pointer"
        />
      </Flex>
    </Box>
  );
};

export default TestListItem;
