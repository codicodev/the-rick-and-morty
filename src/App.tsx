import './App.css';

import CharactersList from './components/CharactersList/CharactersList';
import Header from './components/Header/Header';

function App() {
	return (
		<>
			<Header />
			<main>
				<CharactersList />
			</main>
		</>
	);
}

export default App;
