import { useState, useEffect } from 'react';
import {
	charactersPresenter,
	ICharacterViewModel,
} from '../components/Characters/CharactersPresenter';
import { IInfo } from '../api/characters';

const useCharacters = (page: number) => {
	const [isLoading, setIsLoading] = useState(false);
	const [characters, setCharacters] = useState<ICharacterViewModel[]>([]);
	const [pagination, setPagination] = useState<IInfo | null>(null);
	const [currentPage, setCurrentPage] = useState(page);
	const [error, setError] = useState(false);

	const paginate = (_event: React.ChangeEvent<unknown>, p: number) => {
		setCurrentPage(p);
	};

	useEffect(() => {
		setIsLoading(true);
		charactersPresenter
			.getFullCharactersViewModel(currentPage)
			.then(response => {
				if (response && response.results) {
					setCharacters(response.results);
				}
				if (response && response.info) {
					setPagination(response.info);
				}
				window.scrollTo(0, 0);
			})
			.catch(error => {
				setError(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [currentPage]);

	return {
		isLoading,
		characters,
		pagination,
		currentPage,
		error,
		paginate,
	};
};

export default useCharacters;
