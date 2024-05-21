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
import NewsLetter from './container/NewsLetter/NewsLetter';

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
			<NewsLetter />
			<Footer />
		</>
	);
}

export default App;
