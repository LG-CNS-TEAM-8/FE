import { Box, Button, Spacer } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function NavBar() {
  return (
    <Box
      mb={8}
      px={10}
      height="60px"
      display="flex"
      alignItems="center"
    >
      {/* 홈 버튼 */}
      <Button
        p={2}
        variant="ghost"
        aria-label="Home"
        color="fg"
        _hover={{
          backgroundColor: "transparent",
          transform: "scale(1.05)",
          cursor: "pointer",
          color: "gray.500",
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
        color="fg"
        _hover={{
          backgroundColor: "transparent",
          transform: "scale(1.05)",
          cursor: "pointer",
          color: "gray.500",
        }}
      >
        <AiOutlineSearch />
      </Button>

      {/* 프로필 버튼 */}
      <Button
        p={0}
        aria-label="User"
        variant="ghost"
        color="fg"
        _hover={{
          backgroundColor: "transparent",
          transform: "scale(1.05)",
          cursor: "pointer",
          color: "gray.500",
        }}
      >
        <CgProfile />
      </Button>
    </Box>
  );
}
