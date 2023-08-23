import  React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import FooterComponent from  '../Components/Footer';
import HeaderComponent from '../Components/Header';
import HomeContainer from '../Container/Home';
import ContactContainer from '../Container/Contact';
import DetailsContainer from '../Container/Details';
import MoviesContainer from '../Container/Movies';
import TvShowsContainer from '../Container/TvShows';

import AboutContainer from '../Container/About';
const  RouteComponent = ()=>{

    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<HomeContainer />} />
                        <Route path='/about' element={<AboutContainer />} />
                        <Route path="/movies" element={<MoviesContainer />} />
                        <Route path="/tvshows" element={< TvShowsContainer />} />
                        <Route path="/contact" element={<ContactContainer />} />
                        <Route path="/details/:movieid/:mediatype" element={<DetailsContainer />} />
                    </Routes>        
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}

export default RouteComponent;