import { Box, Button, Spacer } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function NavBar() {
  return (
    <Box
      bg="white"
      mb={8}
      px={10}
      boxShadow="sm"
      height="60px"
      display="flex"
      alignItems="center"
    >
      {/* 홈 버튼 */}
      <Button
        p={2}
        variant="ghost"
        aria-label="Home"
        color="black"
        _hover={{
          color: "gray.400",
          transform: "scale(1.05)",
          cursor: "pointer",
        }}
      >
        <AiOutlineHome />
      </Button>

      <Spacer />

      {/* 검색 버튼 */}
      <Button
        p={2}
        aria-label="Search"
        variant="ghost"
        _hover={{
          color: "gray.400",
          transform: "scale(1.05)",
          cursor: "pointer",
        }}
      >
        <AiOutlineSearch />
      </Button>

      {/* 프로필 버튼 */}
      <Button
        p={0}
        aria-label="User"
        variant="ghost"
        _hover={{
          color: "gray.400",
          transform: "scale(1.05)",
          cursor: "pointer",
        }}
      >
        <CgProfile />
      </Button>
    </Box>
  );
}
