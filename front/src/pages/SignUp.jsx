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
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((result) => {
				console.log('결과: ', result);
				if (result.status === 201) {
					alert(result.message);
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
					<input {...register('id', { required: '필수 정보입니다.' })} id="id" placeholder="이메일" />
					<label htmlFor="id">이메일</label>
				</p>
				{errors.id && <p id="signUp_errors">{errors.id.message}</p>}

				<p>
					<input {...register('nickname', { required: '필수 정보입니다.' })} id="nickname" placeholder="별명" />
					<label htmlFor="nickname">별명</label>
				</p>
				{errors.nickname && <p id="signUp_errors">{errors.nickname.message}</p>}

				<p>
					<input {...register('pw', { required: '필수 정보입니다.' })} id="pw" placeholder="비밀번호" />
					<label htmlFor="pw">비밀번호</label>
				</p>
				{errors.pw && <p id="signUp_errors">{errors.pw.message}</p>}

				{/* 프로필부분은 수정해야 됨 */}
				<p>
					<input {...register('profile', { required: '필수 정보입니다.' })} id="profile" placeholder="프로필" />
					<label htmlFor="profile">프로필</label>
				</p>
				{errors.profile && <p id="signUp_errors">{errors.profile.message}</p>}

				<button className="signUp-button" type="submit">
					가입하기
				</button>
			</form>
		</div>
	);
}

export default SignUp;
