import React from 'react';
import {Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
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
                <section className="section home-2-bg" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className = "align-items-center">
                                    <Col lg="4">
                                        <div className="mt-40 home-2-content">
                                            <h1 className="text-white font-weight-normal home-2-title display-4 mb-0">About Data Republic AI</h1>
                                            <p className="text-white-70 mt-4 f-15 mb-0">blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
                                            <div className="mt-5">
                                                <Link to="#contact" className="btn btn-custom mr-4">Contact Us</Link>"
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg="8">
                                        <div className="mt-40 home-2-content position-relative">
                                            {/* <img src="images/home-2-img.png" alt="" className="img-fluid mx-auto d-block home-2-img" /> */}
                                            <img src="images/slider-home-start-ups.png" alt="" className="img-fluid mx-auto d-block home-2-img" />
                                            <div className="home-2-bottom-img">
                                                <img src="images/homr-2-bg-bottom.png" alt="" className="img-fluid d-block mx-auto" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

}

export default Home;