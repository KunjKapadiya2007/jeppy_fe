import './App.css'
import Navbar from "./components/global/navbar.jsx";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Ourprocess from "./pages/ourprocess.jsx";
import About from "./pages/about.jsx";
import Footer from "./components/global/footer.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/process" element={<Ourprocess/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
