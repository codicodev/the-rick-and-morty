import { ICharacterViewModel } from './CharactersPresenter';
import styled from 'styled-components';

const Container = styled.article`
	background: rgb(60, 62, 68);
	border-radius: 16px;
	border: 1px solid rgba(60, 62, 68, 0.7);
	display: flex;
	width: 100%;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
		rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const ImgContainer = styled.div`
	flex: 2 1 0%;
	width: 100%;
	& img {
		width: 100%;
		height: 100%;
		margin: 0px;
		object-position: center;
		object-fit: cover;
		border-radius: 16px;
	}
`;

const Content = styled.div`
	flex: 3 1 0%;
	position: relative;
	padding: 0.75rem;
	display: flex;
	color: white;
	flex-direction: column;
	& span {
		font-weight: 400;
	}
`;

const Location = styled.div`
	margin-top: 8px;
	& h4 {
		margin-bottom: 4px;
	}
`;

const CharacterCard: React.FC<ICharacterViewModel> = ({
	name,
	image,
	status,
	species,
	gender,
	location,
	origin,
	episode,
}) => {
	return (
		<Container>
			<ImgContainer>
				<img src={image} alt={name} />
			</ImgContainer>
			<Content>
				<h2>{name}</h2>
				<h4>
					{status} - {species} - {gender}
				</h4>
				<Location>
					<h4>Location:</h4>
					{location ? (
						<>
							<h5>
								Name: <span>{location.name}</span>
							</h5>
							<h5>
								Dimension: <span>{location.dimension}</span>
							</h5>
							<h5>
								Residents: <span>{location.residents}</span>
							</h5>
						</>
					) : (
						<h5>Not found</h5>
					)}
				</Location>
				<Location>
					<h4>Origin:</h4>
					{origin ? (
						<>
							<h5>
								Name: <span>{origin.name}</span>
							</h5>
							<h5>
								Dimension: <span>{origin.dimension}</span>
							</h5>
							<h5>
								Residents: <span>{origin.residents}</span>
							</h5>
						</>
					) : (
						<h5>Not found</h5>
					)}
				</Location>
				<Location>
					<h4>First Episode:</h4>
					{episode ? (
						<>
							<h5>
								<span>{episode}</span>
							</h5>
						</>
					) : (
						<h5>Not found</h5>
					)}
				</Location>
			</Content>
		</Container>
	);
};

export default CharacterCard;
