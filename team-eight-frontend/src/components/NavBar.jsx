import {
    Box,
    Button,
    Spacer
} from "@chakra-ui/react";
import {
    AiOutlineHome,
    AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function NavBar() {
    return (
        <Box bg="white" px={4} boxShadow="sm" height="60px" display="flex" alignItems="center">
            {/* 홈 버튼 */}
            <Button
                p={2}
                aria-label="Home"
                color="black"
                _hover={{
                    color: "gray.400",
                    transform: "scale(1.05)",
                    cursor: "pointer"
                }}>
                <AiOutlineHome />
            </Button>

            <Spacer />
            
            {/* 검색 버튼 */}
            <Button
                p={2} 
                aria-label="Search"
                _hover={{
                    color: "gray.400",
                    transform: "scale(1.05)",
                    cursor: "pointer"
                }}>
                <AiOutlineSearch />
            </Button>

            {/* 프로필 버튼 */}
            <Button 
                p={0} 
                aria-label="User" 
                _hover={{
                    color: "gray.400",
                    transform: "scale(1.05)",
                    cursor: "pointer"
                }}>
                <CgProfile />
            </Button>
        </Box>
    );
}