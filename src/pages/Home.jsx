import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	align-items: center;
	justify-content: center;
	flex: 1;
`;

const Title = styled.h1`
	font-size: 2rem;
	margin: 2rem;
`;

const SubTitle = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
`;

const Home = () => {
	return (
		<ContentWrapper>
			<Title>Test light and dark mode</Title>
			<div className="bg"></div>
			<SubTitle>Light mode: you shall see a dog in light background</SubTitle>
			<SubTitle>Dark mode: you shall see a cat in dark background</SubTitle>
		</ContentWrapper>
	);
};

export default Home;
