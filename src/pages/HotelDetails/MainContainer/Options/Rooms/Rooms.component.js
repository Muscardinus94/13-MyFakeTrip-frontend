import React from 'react';
import styled from 'styled-components';

function Rooms({ roomCount, isOptionBtn, countRoom }) {
	const ROOMSCOUNT = [
		{
			title: '스탠다드 더블룸',
			count: roomCount.standardDouble,
			type: 'standardDouble',
		},
		{
			title: '스탠다드 트윈룸',
			count: roomCount.standardTwin,
			type: 'standardTwin',
		},
		{
			title: '디럭스 더블룸',
			count: roomCount.deluxDouble,
			type: 'deluxDouble',
		},
		{
			title: '디럭스 트윈룸',
			count: roomCount.deluxTwin,
			type: 'deluxTwin',
		},
		{
			title: '스위트룸',
			count: roomCount.suite,
			type: 'suite',
		},
	];

	return (
		<RoomsList isOption={isOptionBtn}>
			{ROOMSCOUNT.map((room, idx) => {
				return (
					<Li key={idx}>
						<p>{room.title}</p>
						<Wrap>
							<IconWrap onClick={() => countRoom(false, room.count, room.type)}>
								<i className="fas fa-minus"></i>
							</IconWrap>
							<span>{room.count}</span>
							<IconWrap onClick={() => countRoom(true, room.count, room.type)}>
								<i className="fas fa-plus"></i>
							</IconWrap>
						</Wrap>
					</Li>
				);
			})}
		</RoomsList>
	);
}

export default Rooms;

const RoomsList = styled.ul`
	background-color: white;
	display: ${({ isOption }) => (isOption ? 'none' : 'inline-block')};
	position: absolute;
	z-index: 1;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Li = styled.li`
	width: 428px;
	padding: 16px;
	border: 1px solid #e9ecef;
	color: #343a40;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 500;

	p {
		margin: 0 8px;
		display: inline;
		font-size: 14px;
		vertical-align: middle;
	}
`;

const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		border: 1px solid #ced4da;
		border-radius: 50%;
		cursor: pointer;
		&:hover {
			background-color: #e4e1f1;
		}
	}

	span {
		margin: 0 8px;
	}
`;

const IconWrap = styled.div`
	width: 32px;
	height: 32px;
	border: 1px solid black;
	position: relative;

	i {
		position: absolute;
		top: 25%;
		left: 27%;
	}
`;
