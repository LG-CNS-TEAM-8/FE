import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 회원가입 로직 추가 
        console.log('회원가입 정보:', formData);
        alert('회원가입이 완료되었습니다!');
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">로고섹션</h2>
                
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="아이디를 입력하세요"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호를 입력하세요"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="비밀번호를 다시 입력하세요"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="이메일을 입력하세요"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <button type="submit">다음</button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
