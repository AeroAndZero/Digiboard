import Banner from './components/banner';
import NearYou from './components/nearYou';
import Popular from './components/popular';
import Auction from './components/auction';
import './home.css';

function Home(){
    return(
    <div className="App">
        <Banner />
        <NearYou />
        <Popular />
        <Auction />
    </div>
    );
}

export default Home;