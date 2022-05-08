/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.scss';

function SignUp() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);

		fetch('https://elice-server.herokuapp.com/auth/signup', {
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((result) => {
				console.log('결과: ', result);
				if (result.message === '성공') {
					// 이동할 페이지 작성
					navigate('/');
				} else {
					// 회원가입 실패 메세지
					alert('다시 시도해주세요.');
				}
			});
	};

	return (
		<div className="signUpBox">
			<h1 className="signUp_title">회원가입</h1>
			<form className="signUp" onSubmit={handleSubmit(onSubmit)}>
				<p>
					<input {...register('email', { required: '필수 정보입니다.' })} id="email" placeholder="이메일" />
					<label htmlFor="email">이메일</label>
				</p>
				{errors.email && <p id="signUp_errors">{errors.email.message}</p>}

				<p>
					<input {...register('name', { required: '필수 정보입니다.' })} id="name" placeholder="이름" />
					<label htmlFor="name">이름</label>
				</p>
				{errors.name && <p id="signUp_errors">{errors.name.message}</p>}

				<p>
					<input {...register('nickName', { required: '필수 정보입니다.' })} id="nickName" placeholder="별명" />
					<label htmlFor="nickName">별명</label>
				</p>
				{errors.nickName && <p id="signUp_errors">{errors.nickName.message}</p>}

				<p>
					<input {...register('password', { required: '필수 정보입니다.' })} id="password" placeholder="비밀번호" />
					<label htmlFor="password">비밀번호</label>
				</p>
				{errors.password && <p id="signUp_errors">{errors.password.message}</p>}

				<button className="signUp-button" type="submit">
					가입하기
				</button>
			</form>
		</div>
	);
}

export default SignUp;
