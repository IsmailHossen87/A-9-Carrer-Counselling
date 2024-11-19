import React from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Inspirational from '../Inspiarational/Inspoarational';
import { Helmet } from 'react-helmet';
import LeatestCategory from '../LeatextCategory/LeatestCategory';

const MainLayout = () => {
    return (
       <>
       <div className='container mx-auto'>
       <Helmet>
          <title> Career Counseling || Home</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
            <Navbar></Navbar>
            <Slider></Slider>
            <Card></Card>
            <LeatestCategory></LeatestCategory>
            <Inspirational></Inspirational>
            <Footer></Footer>
        </div>
       </>
    );
};

export default MainLayout;