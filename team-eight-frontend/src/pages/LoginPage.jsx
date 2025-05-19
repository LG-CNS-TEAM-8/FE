import {
    Box,
    Flex,
    Stack,
    Input,
    Button,
    Text,
    Link,
    Heading,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';

function LoginForm() {
    return (
        <Flex minH="100vh" align="center" justify="center" bg="black">
            <Box bg="white" p={8} rounded="md" boxShadow="lg" w={{ base: '90%', md: '400px' }}>
                <Stack spacing={4}>
                    <Flex justify="center">
                        <FaUser size="3em" />
                    </Flex>
                    <Heading textAlign="center" size="lg">
                        로그인
                    </Heading>
                    <Input variant="flushed" placeholder="아이디를 입력하세요" />
                    <Input variant="flushed" type="password" placeholder="비밀번호를 입력하세요" />
                    <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
                        로그인
                    </Button>
                    <Stack spacing={0} align="center">
                        <Text fontSize="sm" color="gray.400">
                            아직 회원이 아니신가요?
                        </Text>
                        <Link href="/signup" fontSize="sm" color="black">
                            회원가입
                        </Link>
                    </Stack>
                </Stack>
            </Box>
        </Flex>
    );
}

export default LoginForm;