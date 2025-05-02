import React from 'react';
import Products from "../components/homePage/products.jsx";
import Milestone from "../components/homePage/milestone.jsx";
import OurCompany from "../components/homePage/ourCompany.jsx";
import AboutUs from "../components/homePage/aboutUs.jsx";
import HeroSection from "../components/home/heroSection.jsx";
import OurSolution from "../components/home/ourSolution.jsx";
import OurPartners from "../components/home/ourPartners.jsx";

function Home() {
    return (
        <>
            <HeroSection />
            <Products/>
            <Milestone/>
            <OurCompany/>
            <OurSolution />
            <OurPartners />
            <AboutUs/>
        </>
    );
}

export default Home;