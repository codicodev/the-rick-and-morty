import styled from 'styled-components';

const HeaderCmp = styled.header`
	padding: 24px;
`;

const Heading = styled.h1`
	text-align: center;
	color: #282c34;
`;

const Header = () => {
	return (
		<HeaderCmp>
			{' '}
			<Heading>The Rick and Morty Characters</Heading>
		</HeaderCmp>
	);
};

export default Header;
