import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner2 from '../Banner2/Banner2';
import Banner3 from '../Banner3/Banner3';
import OurWork from '../OurWork/OurWork';
import Services from '../Services/Services';
import Banner from './../Banner/Banner';
import Logos from './../Logos/Logos';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Banner2></Banner2>
            <Services></Services>
            <Banner3></Banner3>
            <OurWork></OurWork>
            <Logos></Logos>
        </div>
    );
};

export default Home;