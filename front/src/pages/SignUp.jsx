/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.scss';

function SignUp() {
	const pw = useRef(); // 비밀번호 재확인 할 때 필요
	const navigate = useNavigate();
	const {
		register,
		watch,
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
					console.log(result);
					// 이동할 페이지 작성
					navigate('/auth/login');
				} else if (result.status === 409) {
					// 회원가입 실패 메세지
					alert(result.message);
				}
			});
	};
	pw.current = watch('pw'); // name pw인 element 관찰

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

				<p>
					<input
						{...register('pw_check', { required: true, validate: (value) => value === pw.current })}
						id="pw_check"
						placeholder="비밀번호 확인"
					/>
					<label htmlFor="pw_check">비밀번호</label>
				</p>
				{errors.pw_check && errors.pw_check.type === 'required' && <p id="signUp_errors">비밀번호를 적어주세요</p>}

				{errors.pw_check && errors.pw_check.type === 'validate' && (
					<p id="signUp_errors">비밀번호가 일치하지 않습니다</p>
				)}

				<button className="signUp-button" type="submit">
					가입하기
				</button>
			</form>
		</div>
	);
}

export default SignUp;
