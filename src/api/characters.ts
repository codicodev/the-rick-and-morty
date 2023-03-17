import httpGateway from '../shared/httpGateway';
import { Character, Location, Episode } from '../types';

interface ICharacter {
	info: IInfo;
	results: Character[];
}

export interface IInfo {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

export interface IFullCharacters {
	info: IInfo;
	results: IFullCharacter[];
}

export interface IFullCharacter extends Character {
	locationInfo: Location | undefined;
	originInfo: Location | undefined;
	episodeInfo: Episode | undefined;
}

export async function getCharacters(page: number = 1): Promise<ICharacter> {
	const characters = await httpGateway.get(
		`${process.env.REACT_APP_API_URL!}character/?page=${page}`
	);

	return characters;
}

export async function getLocation(path: string): Promise<Location | undefined> {
	let location: Location | undefined;
	try {
		location = await httpGateway.get(path);
	} catch (e) {
		console.log('ERROR getLocation::', e);
		return undefined;
	}
	return location;
}

export async function getOrigin(path: string): Promise<Location | undefined> {
	let origin: Location | undefined;
	try {
		origin = await httpGateway.get(path);
	} catch (e) {
		console.log('ERROR getOrigin::', e);
		return undefined;
	}

	return origin;
}

export async function getEpisode(path: string): Promise<Episode | undefined> {
	let episode: Episode | undefined;
	try {
		episode = await httpGateway.get(path);
	} catch (e) {
		console.log('ERROR getEpisode::', e);
		return undefined;
	}

	return episode;
}

export async function getFullCharacters(
	page: number = 1
): Promise<IFullCharacters> {
	const characters = await getCharacters(page);

	//NOTE::
	//To avoid multiple http calls to the same endpoint (for example to get location or get origin) you could cache for example with redis.

	let fullCharacters: IFullCharacter[] = [];
	if (characters && characters.results.length > 0) {
		fullCharacters = await Promise.all(
			characters.results.map(async character => {
				let location: Location | undefined;
				let origin: Location | undefined;
				let episode: Episode | undefined;
				if (character.location?.url !== '') {
					location = await getLocation(character.location.url);
				}
				if (character.origin?.url) {
					origin = await getOrigin(character.location.url);
				}

				if (character.episode.length > 0) {
					episode = await getEpisode(character.episode[0]);
				}

				return {
					...character,
					locationInfo: location,
					originInfo: origin,
					episodeInfo: episode,
				};
			})
		);
	}

	return {
		info: characters.info,
		results: fullCharacters,
	};
}
