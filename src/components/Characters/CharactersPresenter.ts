import { IFullCharacter, getFullCharacters, IInfo } from '../../api/characters';

export interface ICharacterViewModel
	extends Omit<
		IFullCharacter,
		| 'origin'
		| 'location'
		| 'url'
		| 'created'
		| 'episode'
		| 'locationInfo'
		| 'episodeInfo'
		| 'originInfo'
		| 'type'
	> {
	location?: {
		name?: string;
		dimension?: string;
		residents?: number;
	} | null;
	origin?: {
		name?: string;
		dimension?: string;
		residents?: number;
	} | null;
	episode?: string;
}

interface IFullCharactersPagination {
	info: IInfo;
	results: ICharacterViewModel[];
}

export interface ICharacterViewModel2 {}

async function getFullCharactersViewModel(
	page: number
): Promise<IFullCharactersPagination> {
	const characters = await getFullCharacters(page);
	let charactersViewModel: ICharacterViewModel[] = [];
	if (characters && characters.results.length > 0) {
		charactersViewModel = characters.results.map(character => {
			return {
				id: character.id,
				gender: character.gender,
				image: character.image,
				location: character.locationInfo
					? {
							name: character.locationInfo?.name,
							dimension: character.locationInfo?.dimension,
							residents:
								character.locationInfo?.residents?.length,
					  }
					: null,
				origin: character.originInfo
					? {
							name: character.originInfo?.name,
							dimension: character.originInfo?.dimension,
							residents: character.originInfo?.residents?.length,
					  }
					: null,
				name: character.name,
				species: character.species,
				status: character.status,
				episode: character.episodeInfo?.name,
			};
		});
	}

	return {
		info: characters.info,
		results: charactersViewModel,
	};
}

export const charactersPresenter = {
	getFullCharactersViewModel,
};
