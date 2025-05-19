import React, { useState } from "react";
import { Box, Input, List, ListItem, Text } from "@chakra-ui/react";

const suggestions = [];

export default function Search() {
  const [query, setQuery] = useState("");

  const filtered =
    query && Array.isArray(suggestions)
      ? suggestions.filter((item) => item.includes(query))
      : [];

  // 돋보기 클릭 시 실행할 함수
  const handleSearchClick = () => {
    alert(`검색 실행: ${query}`);
  };

  return (
    <Box w="100%" maxW="600px" mx="auto" mt={10}>
      <Box
        bg="transparent"
        borderRadius="md"
        boxShadow="none"
        overflow="hidden"
        p={4}
      >
        <Box position="relative" width="100%">
          <Input
            placeholder="검색어 입력"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fontWeight="bold"
            mb={2}
            border="1px solid"
            borderColor="fg" 
            _focus={{ borderColor: "gray.300", boxShadow: "none" }}
            pr="40px"
            color="fg"
            sx={{ caretColor: "fg" }}
          />
          <Box
            position="absolute"
            right="12px"
            top="20%"
            _hover={{
              backgroundColor: "transparent",
              transform: "scale(1.05)",
              cursor: "pointer",
              color: "gray.500",
            }}
            pointerEvents="auto"
            color="fg"
            cursor="pointer"
            onClick={handleSearchClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </Box>
        </Box>

        {query && filtered.length > 0 && (
          <List
            spacing={0}
            borderTop="1px solid"
            borderColor="gray.300"
            mt={2}
          >
            {filtered.map((item, index) => (
              <ListItem
                key={index}
                px={4}
                py={2}
                borderTop="1px solid"
                borderColor="transparent"
                _hover={{ bg: "gray.300", cursor: "pointer" }}
              >
                <Text color="fg">{item}</Text>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
}
