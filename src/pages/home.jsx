import React from 'react';
import Products from "../components/homePage/products.jsx";
import Milestone from "../components/homePage/milestone.jsx";
import OurCompany from "../components/homePage/ourCompany.jsx";
import AboutUs from "../components/homePage/aboutUs.jsx";

function Home() {
    return (
        <>
        <Products/>
            <Milestone/>
            <OurCompany/>
            <AboutUs/>
        </>
    );
}

export default Home;