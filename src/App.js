import './App.css';
import AccordionWrapper from './components/Accordion/AccordionWrapper';
import ExternalNav from './components/Nav/ExternalNav';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Help from './components/Help/Help';
import Slider from './components/Slider/Slider';

function App() {
	return (
		<div className='App'>
			<Header />
			<ExternalNav />
			<Help />
			<AccordionWrapper />
			<Slider />
			<Footer />
		</div>
	);
}

export default App;
