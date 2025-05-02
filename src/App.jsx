import './App.css'
import Navbar from "./components/global/navbar.jsx";
import Home from "./pages/home.jsx";

function App() {

  return (
    <>
<Navbar />
        <Home/>
        {/*<Router>*/}
        {/*    <Routes>*/}
        {/*        <Route path="/products" element={<Products />} />*/}
        {/*        <Route path="/process" element={<Process />} />*/}
        {/*        <Route path="/about" element={<About />} />*/}
        {/*        <Route path="/contact" element={<Contact />} />*/}
        {/*    </Routes>*/}
        {/*</Router>*/}
        {/*<Footer />*/}
    </>
  )
}

export default App
