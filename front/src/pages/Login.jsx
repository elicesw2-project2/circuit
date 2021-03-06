/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'styles/Pages/Login.scss';
import { useForm } from 'react-hook-form';
import { saveToken } from 'utils/token';

function Login() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		fetch('https://elice-server.herokuapp.com/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((result) => {
				if (result.message === '로그인 성공') {
					// mainpage로 이동
					navigate('/page=1');
					localStorage.setItem('id', result.data.id);
					saveToken(result.data.token);
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
					<hr />
					<p>
						<input
							className="id"
							{...register('id', { required: '아이디를 입력하세요.' })}
							id="id"
							placeholder="이메일"
						/>
						<label htmlFor="id">아이디</label>
					</p>
					{errors.id && <p id="login_errors">{errors.id.message}</p>}

					<p>
						<input
							className="pw"
							type="password"
							{...register('pw', { required: '비밀번호를 입력하세요.' })}
							id="pw"
							placeholder="비밀번호"
						/>
						<label htmlFor="pw">비밀번호</label>
					</p>
					{errors.pw && <p id="login_errors">{errors.pw.message}</p>}
					<p>
						<button type="submit" id="login-button">
							로그인
						</button>
					</p>
				</form>
				<div className="singUp">
					<span>계정이 없으신가요? </span>
					<span>
						<Link to="/auth/signUp" id="singUp-button">
							가입하기
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Login;
