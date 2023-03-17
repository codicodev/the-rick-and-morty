import httpGateway from '../../shared/httpGateway';
import { getOriginStub } from '../../TestTools/getOrigin.stub';
import { getOrigin } from '../../api/characters';

beforeEach(async () => {
	httpGateway.get = jest.fn().mockImplementation(() => {
		return Promise.resolve(getOriginStub());
	});
});

describe('Origin test', () => {
	it('should load an origin by id', async () => {
		jest.clearAllMocks();
		const locationModel = await getOrigin(
			`${process.env.REACT_APP_API_URL!}location/5`
		);
		expect(httpGateway.get).toHaveBeenCalledWith(
			`${process.env.REACT_APP_API_URL!}location/5`
		);

		expect(locationModel?.id).toBe(5);
		expect(locationModel?.name).toBe('Anatomy Park');
		expect(locationModel?.residents.length).toBe(11);
		expect(locationModel?.url).toBe(
			'https://rickandmortyapi.com/api/location/5'
		);
	});
});
