/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.scss';
import { useForm } from 'react-hook-form';

function Login() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);

		fetch('https://elice-server.herokuapp.com/auth/login', {
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((result) => {
				console.log('결과: ', result);
				if (result.message === '성공') {
					// mainpage로 이동
					navigate('/Story');
				} else {
					alert('아이디나 비밀번호를 바르게 입력해주세요.');
				}
			});
	};

	return (
		<div>
			{/* 로그인 기능부분 박스 */}
			<div className="loginBox">
				<form className="login" onSubmit={handleSubmit(onSubmit)}>
					<h1 className="login_title">Circuit</h1>
					<p>
						<input {...register('username', { required: '아이디를 입력하세요.' })} id="username" placeholder="이메일" />
						<label htmlFor="username">아이디</label>
					</p>

					<p>
						<input
							{...register('password', { required: '비밀번호를 입력하세요.' })}
							id="password"
							placeholder="비밀번호"
						/>
						<label htmlFor="password">비밀번호</label>
					</p>
					{errors.username && <p id="login_errors">{errors.username.message}</p>}
					{errors.password && <p id="login_errors">{errors.password.message}</p>}
					<p>
						<button type="submit" id="login-button">
							로그인
						</button>
					</p>
				</form>
				<div className="singUp">
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
