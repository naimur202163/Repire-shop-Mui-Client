import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner2 from '../Banner2/Banner2';
import Services from '../Services/Services';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Banner2></Banner2>
            <Services></Services>
        </div>
    );
};

export default Home;