import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Symbols from "./Components/Symbols";
import Goals from "./Components/Goals";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";



function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Symbols />
            <Skills />
            <AboutMe />
            <Goals />
            <Footer />
        </div>
    )
}

export default App
