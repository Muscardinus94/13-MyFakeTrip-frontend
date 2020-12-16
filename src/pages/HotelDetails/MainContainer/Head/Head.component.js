import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FiMapPin, FiStar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

function Head({ hotelDetailData, averageRating }) {
	const { name, location, star } = hotelDetailData.hotel_detail;
	const [hotelDetails, setHotelDetails] = useState({});
	const [starArr, setStar] = useState([]);

	const handleStar = () => {
		for (let i = 0; i < star; i++) {
			starArr.push(<StarFull key={i} />);
		}
		for (let i = 0; i < 5 - star; i++) {
			starArr.push(<StarEmpty key={i} />);
		}
		setStar([...starArr]);
	};

	useEffect(() => {
		setHotelDetails({
			name,
			location,
			star,
		});
		handleStar();
	}, []);

	return (
		<HeadCon>
			<Wrap>
				<div>{starArr.map((star) => star)}</div>
				<NameKor>{name}</NameKor>
				<NameEng>Hotel</NameEng>
				<Address>
					<MapMarker />
					{location}
				</Address>
			</Wrap>

			<Wrap rating>
				<RatingText>
					<h3>우수함</h3>
					<p>8개의 이용후기</p>
				</RatingText>
				<RatingBox>
					<div>{averageRating}</div>
				</RatingBox>
			</Wrap>
		</HeadCon>
	);
}

export default Head;

const StarStyle = css`
	width: 12px;
	height: 12px;
	color: rgba(255, 211, 0, 1);
`;

const HeadCon = styled.header`
	margin-top: 40px;
	margin-bottom: 40px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

const Wrap = styled.div`
	display: ${({ rating }) => (rating ? 'flex' : null)};
`;

const StarEmpty = styled(FiStar)`
	${StarStyle}
`;

const StarFull = styled(FaStar)`
	${StarStyle}
`;

const NameKor = styled.h1`
	margin: 10px 0;
	color: #343a40;
	font-size: 32px;
	font-weight: 700;
	line-height: 40px;
`;

const NameEng = styled.p`
	margin-top: 4px;
	color: #666d75;
	font-size: 15px;
	line-height: 16px;
`;

const Address = styled.address`
	margin-top: 16px;
	color: #848c94;
	font-size: 13px;
	line-height: 16px;
`;

const MapMarker = styled(FiMapPin)`
	width: 13px;
	height: 13px;
`;

const RatingText = styled.div`
	margin-right: 12px;

	h3 {
		color: #003580;
		font-size: 16px;
		font-weight: 600;
		line-height: 20px;
	}

	p {
		color: #848c94;
		font-size: 12px;
		line-height: 20px;
	}
`;

const RatingBox = styled.div`
	width: 40px;
	height: 40px;
	font-size: 18px;
	font-weight: 600;
	line-height: 40px;

	div {
		border-radius: 4px;
		color: white;
		background-color: ${({ theme }) => theme.colors.mainBlue};
		text-align: center;
	}
`;
