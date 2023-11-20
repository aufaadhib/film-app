import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.css';

import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routeran from './config/Routeran';

function App() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props}/>
                    <Routeran/>
                    <Footer/>
                </>
            )}/>
        </BrowserRouter>
    );
}

export default App;