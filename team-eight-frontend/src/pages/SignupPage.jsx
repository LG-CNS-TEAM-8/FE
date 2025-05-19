import React, { useState } from 'react';
import {
    Box,
    Flex,
    Stack,
    Input,
    Button,
    Heading,
    InputGroup,
    IconButton,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
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
        console.log('Signup Information:', formData);
        alert('회원가입이 완료되었습니다!');
    };

    return (
        <Flex minH="100vh" align="center" justify="center" bg="black">
            <Box
                bg="white"
                p={8}
                rounded="md"
                boxShadow="lg"
                w={{ base: '90%', md: '400px' }}
            >
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <Heading textAlign="center" size="lg">
                            로고섹션
                        </Heading>
                        <Input
                            variant="flushed"
                            placeholder="아이디를 입력하세요"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <InputGroup
                            endElement={
                                <IconButton
                                    variant="ghost"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            }
                        >
                            <Input
                                variant="flushed"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="비밀번호를 입력하세요"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </InputGroup>
                        <InputGroup
                            endElement={
                                <IconButton
                                    variant="ghost"
                                    aria-label={
                                        showConfirmPassword ? 'Hide password' : 'Show password'
                                    }
                                    icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                />
                            }
                        >
                            <Input
                                variant="flushed"
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="비밀번호 확인"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </InputGroup>
                        <Input
                            variant="flushed"
                            type="email"
                            placeholder="이메일을 입력하세요"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Button
                            borderRadius={0}
                            type="submit"
                            variant="solid"
                            colorScheme="teal"
                            width="full"
                        >
                            다음
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Flex>
    );
};

export default SignupPage;
