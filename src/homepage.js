import React from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import AboutSection from './components/AboutSection';

class Homepage extends React.Component {
    componentDidMount() {
        document.getElementById("main_navbar").classList.add("navbar-light");
    }

    render() {
        return (
            <React.Fragment>
                {/* preloader */}
                <Preloader />

                {/* Navigation Menu */}
                <Navbar />
                
                {/* HomeSection Menu */}
                <Home />

                {/* AboutSection Menu */}
                <AboutSection />

            </React.Fragment>
        );
    }
}

export default Homepage;
