import './App.css'
import Navbar from "./components/global/navbar.jsx";
import {Routes , Route} from "react-router-dom";
import Home from "./pages/home.jsx";

function App() {

  return (
    <>
<Navbar />
        <Home/>
        <Routes>
            {/*<Route path="/products" element={<Products/>}/>*/}
            <Route path="/process" element={<Ourprocess/>}/>
            {/*<Route path="/about" element={<About/>}/>*/}
            {/*<Route path="/contact" element={<Contact/>}/>*/}
        </Routes>
        {/*<Footer />*/}
    </>
  )
}

export default App
