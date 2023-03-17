export function getFullCharacters() {
	return {
		info: {
			count: 826,
			pages: 42,
			next: 'https://rickandmortyapi.com/api/character/?page=2',
			prev: null,
		},
		results: [
			{
				id: 1,
				gender: 'Male',
				image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
				location: {
					name: 'Citadel of Ricks',
					dimension: 'unknown',
					residents: 101,
				},
				origin: {
					name: 'Citadel of Ricks',
					dimension: 'unknown',
					residents: 101,
				},
				name: 'Rick Sanchez',
				species: 'Human',
				status: 'Alive',
				type: '',
				episode: 'Pilot',
			},
			{
				id: 2,
				gender: 'Male',
				image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
				location: {
					name: 'Citadel of Ricks',
					dimension: 'unknown',
					residents: 101,
				},
				origin: null,
				name: 'Morty Smith',
				species: 'Human',
				status: 'Alive',
				type: '',
				episode: 'Pilot',
			},
			{
				id: 3,
				gender: 'Female',
				image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
				location: {
					name: 'Earth (Replacement Dimension)',
					dimension: 'Replacement Dimension',
					residents: 230,
				},
				origin: {
					name: 'Earth (Replacement Dimension)',
					dimension: 'Replacement Dimension',
					residents: 230,
				},
				name: 'Summer Smith',
				species: 'Human',
				status: 'Alive',
				type: '',
				episode: 'Rick Potion #9',
			},
		],
	};
}
