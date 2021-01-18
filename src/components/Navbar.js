import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Tab: '' };
    }

    /**
     * Sets active tab
     */
    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    }

    render() {

        return (
            <React.Fragment>
                <nav id="main_navbar" className="navbar navbar-expand-lg  fixed-top navbar-custom sticky sticky-dark">
                    <div className="container">
                        <Link className="navbar-brand logo" to="/">
                            <img src="images/logo2.png" alt="" height="30" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="mdi mdi-menu"></i>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                                    <li className="nav-item active"><a href="#aboutagi" className="nav-link">AGI</a></li>
                                    <li className="nav-item"><a href="#aisoftware" className="nav-link">AI Software</a></li>
                                    <li className="nav-item"><a href="#datavoucher" className="nav-link">Data Voucher</a></li>
                                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                                    <li className="nav-item"><a href="#resources" className="nav-link">Resources</a> </li>
                                    <li className="nav-item"><a href="#news" className="nav-link">News</a></li>
                                    <li className="nav-item"><a href="#search" className="nav-link"><img src="images/magnifying-glass-white.png" alt="" height="20" style={{opacity:0.75}}/></a></li>
                                </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }

}

export default Navbar;