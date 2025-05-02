import React from 'react';
import HeroSection from "../components/home/heroSection.jsx";
import OurSolution from "../components/home/ourSolution.jsx";
import OurPartners from "../components/home/ourPartners.jsx";

function Home() {
    return (
        <>
            <HeroSection />
            <OurSolution />
            <OurPartners />
        </>
    );
}

export default Home;