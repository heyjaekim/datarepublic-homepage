import React from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import PartnersSection from './components/PartnersSection';
import NextStepSection from './components/NextStepSection';

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
                {/* <div className="wrapper">
                    
                    <main className="page-content">
                        
                        <div className="" id="fullpage6">
                            
                            <section className="bg-image-slider height-auto" data-skin="light">
                                <div className="presentation-slider-wrapper">
                                    <div className="presentation-inner">
                                        

                                    </div>
                                </div>
                            </section>
                            
                            
                        </div>
                    </main>
                </div> */}

                {/* AboutSection Menu */}
                <AboutSection />

                {/* ProductSection */}
                <ProductSection />

                {/* PartnersSection */}
                <PartnersSection />

                {/* NextStepSection */}
                <NextStepSection />
                

            </React.Fragment>
        );
    }
}

export default Homepage;
