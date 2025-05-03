import React from 'react';
import OurVision from "../components/aboutUs/ourVision.jsx";
import WhoWeAre from "../components/aboutUs/WhoWeAre.jsx";
import GlobelAbout from "../components/aboutUs/GlobelAbout.jsx";
import SliderAbout from "../components/aboutUs/SliderAbout.jsx";
import OurCertificates from "../components/aboutUs/OurCertificates.jsx";

function About() {
    return (
        <>
            <OurVision />
            {/*<WhoWeAre />*/}
            <GlobelAbout/>
            <SliderAbout/>
            <OurCertificates/>
        </>
    );
}

export default About;