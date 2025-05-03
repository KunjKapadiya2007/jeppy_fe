import React from 'react';
import {Box} from "@mui/material";
import Header from "../components/global/header.jsx";
import Snackingvision from "../components/ourprocess/snackingvision.jsx";
import Ourprocessstep1 from "../components/ourprocess/ourprocessstep1.jsx";
import Ourprocessstep2 from "../components/ourprocess/ourprocessstep2.jsx";
import Ourprocessstep3 from "../components/ourprocess/ourprocessstep3.jsx";
import Ourprocessstep4 from "../components/ourprocess/ourprocessstep4.jsx";
import Ourprocessstep5 from "../components/ourprocess/ourprocessstep5.jsx";

function Ourprocess() {
    return (
        <>
            <Header/>
            <Snackingvision/>
            <Ourprocessstep1/>
            <Ourprocessstep2/>
            <Ourprocessstep3/>
            <Ourprocessstep4/>
            <Ourprocessstep5/>
        </>
    );
}

export default Ourprocess;