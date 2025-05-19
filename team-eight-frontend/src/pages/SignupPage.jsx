import React, { useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Input,
  Button,
  Image,
  Field,
} from "@chakra-ui/react";

import myLogo from "../assets/myLogo.png";
import { PasswordInput } from "../components/ui/password-input";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직
    console.log("Signup Information:", formData);
    alert("회원가입이 완료되었습니다!");
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="black">
      <Box
        bg="white"
        p={8}
        rounded="3xl"
        boxShadow="lg"
        width={400}
        height={520}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Flex justify="center">
              <Image src={myLogo} width={"200px"} mb={8} />
            </Flex>
            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Input
                variant="flushed"
                placeholder="아이디를 입력하세요"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <PasswordInput
                variant="flushed"
                placeholder="비밀번호를 입력하세요"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <PasswordInput
                variant="flushed"
                placeholder="비밀번호 확인"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input
                variant="flushed"
                type="email"
                placeholder="이메일을 입력하세요"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Field.Root>
            <Link to={"/signup/keywords"}>
              <Button
                mt={4}
                borderRadius={"md"}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                다음
              </Button>
            </Link>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default SignupPage;
