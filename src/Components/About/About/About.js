import { Container } from '@mui/material';
import React from 'react';
import Header from '../../Shared/Header/Header';
import Aboutbanner from '../About-banner/About-banner';
import AboutMidBanner from './../AboutMidBanner/AboutMidBanner';
import MeetOurTeam from './../MeetOuerTeam/MeetOurTeam';

const About = () => {
    return (
        <div>
            <Header />
            <Container>
                <Aboutbanner></Aboutbanner>
            </Container>

            <AboutMidBanner></AboutMidBanner>
            <MeetOurTeam></MeetOurTeam>
        </div>
    );
};

export default About;