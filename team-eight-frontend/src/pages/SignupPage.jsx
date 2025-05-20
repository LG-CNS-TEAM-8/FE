import {
  Box,
  Flex,
  Stack,
  Input,
  Button,
  Image,
  Field,
  Text,
} from "@chakra-ui/react";

import myLogo from "../assets/myLogo.png";
import { PasswordInput } from "../components/ui/password-input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { signup } from "../api/user_api";

const SignupPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const res = await signup(data);
      console.log("회원가입 성공: ", res);
      navigate("/signup/keywords", { state: { userId: res.userId } });
    } catch (err) {
      console.error("❌ 회원가입 실패 ❌:", err);
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="black">
      <Box
        bg="white"
        p={8}
        rounded="3xl"
        boxShadow="lg"
        width={400}
        height={600}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <Flex justify="center">
              <Image src={myLogo} width={"200px"} mb={8} />
            </Flex>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input
                {...register("email", { required: "아이디는 필수입니다" })}
                variant="flushed"
                type="email"
                placeholder="이메일을 입력하세요"
              />
              <Text color="red" fontSize="xs" minHeight="16px">
                {errors.email?.message ?? ""}
              </Text>
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <PasswordInput
                {...register("password", { required: "비밀번호는 필수입니다" })}
                variant="flushed"
                placeholder="비밀번호를 입력하세요"
              />
              <Text color="red" fontSize="xs" minHeight="16px">
                {errors.password?.message ?? ""}
              </Text>
            </Field.Root>
            <Field.Root>
              <Field.Label>Confirm Password</Field.Label>
              <PasswordInput
                {...register("confirmPassword", {
                  required: "비밀번호는 필수입니다",
                  validate: (value) =>
                    value === password || "비밀번호가 일치하지 않습니다.",
                })}
                variant="flushed"
                placeholder="비밀번호 확인"
              />
              <Text color="red" fontSize="xs" minHeight="16px">
                {errors.confirmPassword?.message ?? ""}
              </Text>
            </Field.Root>
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input
                {...register("name", { required: "이름은 필수입니다" })}
                variant="flushed"
                placeholder="이름을 입력하세요"
              />
              <Text color="red" fontSize="xs" minHeight="16px">
                {errors.name?.message ?? ""}
              </Text>
            </Field.Root>
            {/* <Link to={"/signup/keywords"}> */}
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
            {/* </Link> */}
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default SignupPage;
