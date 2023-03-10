import Arrivals from './Modules/Builders/Components/Home/Arrivals/Arrivals';
import BestSeller from './Modules/Builders/Components/Home/BestSeller/BestSeller';
import Brands from './Modules/Builders/Components/Home/Brands/Brands';
import Footer from './Modules/Builders/Components/Home/Footer/Footer';
import Header from './Modules/Builders/Components/Home/Header/Header';
import Intro from './Modules/Builders/Components/Home/Intro/Intro';
import Journal from './Modules/Builders/Components/Home/Journal/Journal';
import Phone from './Modules/Builders/Components/Home/Phone/Phone';
import Sales from './Modules/Builders/Components/Home/Sales/Sales';
import Special from './Modules/Builders/Components/Home/Special/Special';

function App() {
    return (
        <>
            <Header />
            <Intro/>
            <Sales/>
            <Arrivals/>
            <BestSeller/>
            <Phone/>
            <Special/>
            <Brands/>
            <Journal/>
            <Footer/>
        </>
        
    );
}

export default App;
