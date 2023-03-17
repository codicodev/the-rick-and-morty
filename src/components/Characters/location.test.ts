import httpGateway from '../../shared/httpGateway';
import { getLocationStub } from '../../TestTools/getLocation.stub';
import { getLocation } from '../../api/characters';

beforeEach(async () => {
	httpGateway.get = jest.fn().mockImplementation(() => {
		return Promise.resolve(getLocationStub());
	});
});

describe('Location test', () => {
	it('should load a location by id', async () => {
		jest.clearAllMocks();
		const locationModel = await getLocation(
			`${process.env.REACT_APP_API_URL!}location/20`
		);
		expect(httpGateway.get).toHaveBeenCalledWith(
			`${process.env.REACT_APP_API_URL!}location/20`
		);

		expect(locationModel?.id).toBe(20);
		expect(locationModel?.name).toBe('Earth (Replacement Dimension)');
		expect(locationModel?.residents.length).toBe(6);
		expect(locationModel?.url).toBe(
			'https://rickandmortyapi.com/api/location/20'
		);
	});
});
