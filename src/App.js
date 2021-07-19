import React from "react";
import "./App.css";

// PÁGINA HOME
import Home from "./Pages/Home/index";

// COMPONENTES
import Navbar from "./Components/Navbar/index";
import Footer from "./Components/Footer/index";



function App() {
    return (
        <div className="App">
            <Navbar />
                <Home />
            <Footer />
        </div>
    )
}

export default App
