import Arrivals from './Modules/Builders/Components/Home/Arrivals/Arrivals';
import BestSeller from './Modules/Builders/Components/Home/BestSeller/BestSeller';
import Header from './Modules/Builders/Components/Home/Header/Header';
import Intro from './Modules/Builders/Components/Home/Intro/Intro';
import Phone from './Modules/Builders/Components/Home/Phone/Phone';
import Sales from './Modules/Builders/Components/Home/Sales/Sales';

function App() {
    return (
        <>
            <Header />
            <Intro/>
            <Sales/>
            <Arrivals/>
            <BestSeller/>
            <Phone/>
        </>
        
    );
}

export default App;
