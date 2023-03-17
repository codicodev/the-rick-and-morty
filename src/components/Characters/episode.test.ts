import httpGateway from '../../shared/httpGateway';
import { getEpisodeStub } from '../../TestTools/getEpisode.stub';
import { getEpisode } from '../../api/characters';

beforeEach(async () => {
	httpGateway.get = jest.fn().mockImplementation(() => {
		return Promise.resolve(getEpisodeStub());
	});
});

describe('Episode test', () => {
	it('should load an episod by id', async () => {
		jest.clearAllMocks();
		const locationModel = await getEpisode(
			`${process.env.REACT_APP_API_URL!}episode/27`
		);
		expect(httpGateway.get).toHaveBeenCalledWith(
			`${process.env.REACT_APP_API_URL!}episode/27`
		);

		expect(locationModel?.id).toBe(27);
		expect(locationModel?.name).toBe('Rest and Ricklaxation');
		expect(locationModel?.episode).toBe('S03E06');
		expect(locationModel?.characters.length).toBe(19);
		expect(locationModel?.url).toBe(
			'https://rickandmortyapi.com/api/episode/27'
		);
	});
});
