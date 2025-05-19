import {
  Box,
  Flex,
  Stack,
  Input,
  Button,
  Text,
  Heading,
  Image,
  Field,
} from "@chakra-ui/react";
import { PasswordInput } from "../components/ui/password-input";

import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import myLogo from "../assets/myLogo.png";

function LoginPage() {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="black">
      <Box
        bg="white"
        p={8}
        rounded="3xl"
        boxShadow="lg"
        width={400}
        height={440}
      >
        <Stack spacing={4}>
          <Flex justify="center">
            <Image src={myLogo} width={"200px"} mb={8} />
          </Flex>
          <Field.Root>
            <Field.Label>Username</Field.Label>
            <Input variant="flushed" placeholder="아이디를 입력해주세요" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Password</Field.Label>
            <PasswordInput
              variant="flushed"
              placeholder="비밀번호를 입력해주세요"
            />
          </Field.Root>
          <Link to={"/home"}>
            <Button
              mt={4}
              mb={2}
              borderRadius={"md"}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
            >
              로그인
            </Button>
          </Link>
          <Stack spacing={0} align="center">
            <Text fontSize="sm" color="gray.400">
              아직 회원이 아니신가요?
            </Text>
            <Link to="/signup" fontSize="sm" color="black">
              <Text textDecoration={"underline"}>회원가입 시작하기</Text>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}

export default LoginPage;
