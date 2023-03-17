import CharacterCard from '../Characters/CharacterCard';
import useCharacters from '../../hooks/useCharacters';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

import styled from 'styled-components';

const Container = styled.div`
	background-color: #282c34;
	padding: 8px;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
`;

const CharactersContainer = styled.div`
	display: grid;
	column-gap: 16px;
	row-gap: 16px;
	padding: 32px;
	grid-template-columns: 33% 33% 33%;
	margin: auto;
	@media (max-width: 1360px) {
		grid-template-columns: 50% 50%;
	}
	@media (max-width: 960px) {
		grid-template-columns: 100%;
	}
`;
const PaginationContainer = styled.div`
	padding: 32px;
	display: flex;
	justify-content: center;
`;

const CharactersList = () => {
	const { isLoading, characters, pagination, currentPage, error, paginate } =
		useCharacters(1);

	return (
		<>
			{isLoading && (
				<Container>
					<Loading />
				</Container>
			)}
			{error && (
				<Container>
					<Error />
				</Container>
			)}
			{characters.length > 0 && (
				<>
					<Container>
						<CharactersContainer>
							{characters.map(character => {
								return (
									<CharacterCard
										key={character.id}
										id={character.id}
										name={character.name}
										image={character.image}
										status={character.status}
										species={character.species}
										gender={character.gender}
										location={character.location}
										origin={character.origin}
										episode={character.episode}
									/>
								);
							})}
						</CharactersContainer>
					</Container>
					{pagination && (
						<PaginationContainer>
							<Pagination
								count={pagination.pages}
								onChange={paginate}
								page={currentPage}
								size='large'
							/>
						</PaginationContainer>
					)}
				</>
			)}
		</>
	);
};

export default CharactersList;
