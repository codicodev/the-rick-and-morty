import httpGateway from '../../shared/httpGateway';
import { charactersPresenter } from './CharactersPresenter';
import { getFullCharacters } from '../../TestTools/getFullCharacters.stub';

beforeEach(async () => {
	httpGateway.get = jest.fn().mockImplementation(() => {
		return Promise.resolve(getFullCharacters());
	});
});

describe('Characters test', () => {
	it('should load a list of full characters', async () => {
		jest.clearAllMocks();
		const viewModel = await charactersPresenter.getFullCharactersViewModel(
			1
		);
		expect(httpGateway.get).toHaveBeenCalledWith(
			`${process.env.REACT_APP_API_URL!}character/?page=1`
		);

		expect(viewModel.results[0].name).toBe('Rick Sanchez');
		expect(viewModel.results[0].gender).toBe('Male');
		expect(viewModel.results[0].species).toBe('Human');
		expect(viewModel.results[1].origin).toBe(null);
		expect(viewModel.results[2].name).toBe('Summer Smith');
	});
});
