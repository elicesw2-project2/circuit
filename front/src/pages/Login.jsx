/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import { useForm } from 'react-hook-form';

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div>
			{/* 로그인 기능부분 박스 */}
			<div id="logInBox">
				<form onSubmit={handleSubmit(onSubmit)} id="login">
					<h1>Circuit</h1>
					<p>
						<input {...register('loginId', { required: '아이디를 입력하세요.' })} id="loginId" placeholder="이메일" />
						<label htmlFor="loginId">이메일</label>
					</p>

					<p>
						<input
							{...register('password', { required: '비밀번호를 입력하세요.' })}
							id="password"
							placeholder="비밀번호"
						/>
						<label htmlFor="password">비밀번호</label>
					</p>
					{errors.loginId && <p id="errors">{errors.loginId.message}</p>}
					{errors.password && <p id="errors">{errors.password.message}</p>}
					<p>
						<button type="submit" id="login-button">
							로그인
						</button>
					</p>
				</form>
				<div id="singUp">
					<span>계정이 없으신가요? </span>
					<span>
						<Link to="/signUp" id="singUp-button">
							가입하기
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Login;
