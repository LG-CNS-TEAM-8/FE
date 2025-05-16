import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaFigma, FaGithub } from "react-icons/fa";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <Box bg="black" color="white" height={250} py={12} px={5}>
      <Flex
        maxW="6xl"
        mx="20"
        justify="space-between"
        wrap="wrap"
        align="flex-start"
      >
        {/* 왼쪽 아이콘 영역 */}
        <HStack spacing={10} mb={{ base: 6, md: 0 }}>
          <Link href="http://localhost:3000" aria-label="Home Link">
            <Image
              src={logo}
              alt="Logo"
              boxSize={"32px"}
              _hover={{
                opacity: 0.7,
                transform: "scale(1.05)",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link
            href="https://github.com/LG-CNS-TEAM-8"
            aria-label="Github link"
            target="_blank"
          >
            <Icon
              as={FaGithub}
              boxSize={7}
              color="white"
              _hover={{
                color: "gray.400",
                transform: "scale(1.05)",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link
            href="https://www.figma.com/design/791grcr2IGCbY72UPbNTtz/LG-CNS-%EB%AF%B8%EB%8B%88%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-8%EC%A1%B0-Frontend?node-id=0-1&m=dev&t=P1Iw42SdDFb5CSWA-1"
            aria-label="Figma link"
            target="_blank"
          >
            <Icon
              as={FaFigma}
              boxSize={7}
              color="white"
              _hover={{
                color: "gray.400",
                transform: "scale(1.05)",
                cursor: "pointer",
              }}
            />
          </Link>
        </HStack>

        {/* 오른쪽 정보 영역 */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 10, md: 60 }}
        >
          {/* Frontend */}
          <VStack align="start" spacing={1}>
            <Text fontWeight="bold" mb={2}>
              Frontend
            </Text>
            <Text>구민</Text>
            <Text>오장현</Text>
            <Text>이준호</Text>
          </VStack>

          {/* Backend */}
          <VStack align="start" spacing={1}>
            <Text fontWeight="bold" mb={2}>
              Backend
            </Text>
            <Text>남윤호</Text>
            <Text>심규환</Text>
            <Text>정수연</Text>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
