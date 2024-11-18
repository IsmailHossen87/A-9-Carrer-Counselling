import React from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Inspirational from '../Inspiarational/Inspoarational';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className='w-10/12  mx-auto'>
            <Slider></Slider>
            </div>
            <Card></Card>
            <Inspirational></Inspirational>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;