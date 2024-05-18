import './App.css';
import { Navbar } from './components';
import {
	About,
	Chef,
	FindUs,
	Footer,
	Gallery,
	Header,
	IntroVideo,
	Laurels,
	SpecialMenu,
} from './container';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<SpecialMenu />
			<Chef />
			<IntroVideo />
			<Laurels />
			<Gallery />
			<FindUs />
			<Footer />
		</>
	);
}

export default App;
