/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import '../styles/SignUp.css';

function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div id="signUpBox">
			<h1>회원가입</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p>
					<input {...register('id1', { required: '필수 정보입니다.' })} id="id1" placeholder="이메일" />
					<label htmlFor="id1">이메일</label>
				</p>
				{errors.id1 && <p id="errors">{errors.id1.message}</p>}

				<p>
					<input {...register('name', { required: '필수 정보입니다.' })} id="name" placeholder="이름" />
					<label htmlFor="name">이름</label>
				</p>
				{errors.name && <p id="errors">{errors.name.message}</p>}

				<p>
					<input {...register('nickName', { required: '필수 정보입니다.' })} id="nickName" placeholder="별명" />
					<label htmlFor="nickName">별명</label>
				</p>
				{errors.nickName && <p id="errors">{errors.nickName.message}</p>}

				<p>
					<input {...register('password', { required: '필수 정보입니다.' })} id="password" placeholder="비밀번호" />
					<label htmlFor="password">비밀번호</label>
				</p>
				{errors.password && <p id="errors">{errors.password.message}</p>}

				<p>
					<input
						{...register('passwordCheck', { required: '필수 정보입니다.' })}
						id="passwordCheck"
						placeholder="비밀번호 재확인"
					/>
					<label htmlFor="passwordCheck">비밀번호 확인</label>
				</p>
				{errors.passwordCheck && <p id="errors">{errors.passwordCheck.message}</p>}

				<button type="submit" id="signUp-button">
					가입하기
				</button>
			</form>
		</div>
	);
}

export default SignUp;
