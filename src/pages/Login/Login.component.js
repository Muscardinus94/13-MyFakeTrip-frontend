/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line prettier/prettier
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line prettier/prettier
import { Link, withRouter } from 'react-router-dom';
// eslint-disable-next-line prettier/prettier
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { getUserToken } from '../../redux/user/user.actions';

const Login = ({ getUserToken, history }) => {
	const handleSocialLogiIn = () => {
		window.Kakao.Auth.login({
			success: function (authObj) {
				console.log(JSON.stringify(authObj));
				fetch('http://10.58.6.219:8000/users/signin/kakao', {
					method: 'GET',
					headers: {
						Authorization: authObj.access_token,
					},
				})
					.then((res) => res.json())
					.then((res) => {
						console.log(res);
						getUserToken(res.token);
						// localStorage.setItem('Kakao_token', res.token);
						if (res.token) {
							alert('Successfully logged in!');
							history.push('/');
							// window.location.reload();
						}
					});
			},
			fail: function (error) {
				alert(JSON.stringify(error));
			},
		});
	};
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	useEffect(() => {
		window.Kakao.init('c681ae9bdf335412b545a06745075497');
		console.log(email, password);
	}, [email, password]);
	function handleInputEmail(e) {
		setEmail(e.target.value);
	}
	function handleInputPassword(e) {
		setPassword(e.target.value);
	}
	const isLogin = () => {
		fetch('http://10.58.6.219:8000/users/signin/kakao', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((res) => res.json())
			.then((result) => console.log('결과:', result));
	};
	// eslint-disable-next-line prettier/prettier
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (values) => {
		console.log(values);
	};
	return (
		<Wrapper>
			<Container>
				<Image
					src="https://www.myrealtrip.com/webpack/66066a48489320a05330e36ba701d7e6.png"
					alt="welcome hand"
				/>
				<Title>Welcome!</Title>
				<Desc>여행의 모든 것, 마이리얼트립</Desc>
				<KakaoBtn onClick={handleSocialLogiIn}>
					<KakaoIcon
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxwYXRoIGZpbGw9IiMzODFFMUYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkgNEM1LjY4NiA0IDMgNi4xMjQgMyA4Ljc0M2MwIDEuNzA1IDEuMTM4IDMuMiAyLjg0NiA0LjAzNi0uMTI1LjQ2OC0uNDU0IDEuNjk3LS41MiAxLjk2LS4wODEuMzI2LjEyLjMyMi4yNTEuMjM0LjEwNC0uMDY4IDEuNjQ0LTEuMTE2IDIuMzEtMS41NjguMzYuMDUzLjczMi4wODIgMS4xMTMuMDgyIDMuMzE0IDAgNi0yLjEyNCA2LTQuNzQ0QzE1IDYuMTIzIDEyLjMxNCA0IDkgNCIvPgo8L3N2Zz4KCg=="
						alt="kakao icon"
					/>
					카카오로 계속하기
				</KakaoBtn>
				<Icons>
					<FacebookLogin>
						<FacebookIcon
							src="https://www.myrealtrip.com/webpack/9585685fa907724c219483be5f7fcfda.svg"
							alt="facebook icon"
						/>
						페이스북
					</FacebookLogin>
					<NaverLogin>
						<NaverIcon
							src="https://www.myrealtrip.com/webpack/2c3e797d1b2ac9ab2db1fb4bfb9d6b3c.svg"
							alt="naver icon"
						/>
						네이버
					</NaverLogin>
					<Link to="/loginemail">
						<EmailLogin>
							<EmailIcon
								src="https://www.myrealtrip.com/webpack/6aac3c05928e0b3db40bbcad0548b3a1.svg"
								alt="email icon"
							/>
							이메일
						</EmailLogin>
					</Link>
				</Icons>
				<CreateAccount>
					아직 회원이 아니신가요?
					<CreateOne to="/signup"> 회원가입 </CreateOne>
				</CreateAccount>
			</Container>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 430px;
	height: 450px;
	border: 1px solid #e9ecef;
`;
const Image = styled.img`
	width: 56px;
	height: 56px;
	margin: 40px 0;
`;
const Title = styled.h1`
	font-size: 28px;
	font-weight: 700;
	color: #343a40;
	text-align: center;
`;
const Desc = styled.span`
	font-size: 16px;
	font-weight: 700;
	color: #666d75;
	text-align: center;
	margin-bottom: 20px;
`;
const KakaoBtn = styled.button`
	width: 332px;
	height: 48px;
	background-color: #f7e316;
	color: #381e1f;
	text-align: center;
	border-radius: 3px;
	border: 1px solid transparent;
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 25px;
`;
const KakaoIcon = styled.img`
	width: 20px;
	margin-right: 5px;
`;
const Icons = styled.div`
	display: flex;
	margin-bottom: 45px;
`;
const FacebookIcon = styled.img`
	width: 20px;
	padding-right: 5px;
`;
const FacebookLogin = styled.span`
	color: #666d75;
	font-size: 15px;
	font-weight: 600;
	padding-right: 20px;
`;
const NaverIcon = styled.img`
	width: 20px;
	padding-right: 5px;
`;
const NaverLogin = styled.span`
	color: #666d75;
	font-size: 15px;
	font-weight: 600;
	padding-right: 20px;
`;
const EmailIcon = styled.img`
	width: 20px;
	padding-right: 5px;
`;
const EmailLogin = styled.span`
	color: #666d75;
	font-size: 15px;
	font-weight: 600;
`;
const CreateAccount = styled.p`
	text-align: center;
	font-size: 14px;
	font-weight: 600;
	color: #848c94;
`;
const CreateOne = styled(Link)`
	text-decoration: underline;
	color: #666d75;
`;
export default withRouter(connect(null, { getUserToken })(Login));
