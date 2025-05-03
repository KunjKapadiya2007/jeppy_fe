import React from 'react';
import OurVision from "../components/aboutUs/ourVision.jsx";
import bgimage from "../assets/images/global/header/8bbbd2619c93ab8475f2c6429e20a1a41f0c5998.jpg";
import Header from "../components/global/header.jsx";

function About() {
    return (
        <>
            <Header buttonText={"Let's Connect"}
                    subtext={'From sourcing to final packaging, Fleppy’s process is designed to deliver consistent, high-quality snacks you can trust.'}
                    heading={'From Idea to Crunch, We Do It Right.'}
                    img={bgimage}
                    bgcolor={'rgba(254, 195, 85, 0.5)'}
            />
            <OurVision />
        </>
    );
}

export default About;