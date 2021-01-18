import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class ProductSection extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="section bg-product bg-light-product">
                    <div className="container">
                        <Row>
                            <Col>
                                <hr className="h-line2" />
                                <div className="mb-5">
                                    <h3 className="text-center text-light mb-1 front-weight-light text-uppercase">Our Products</h3>
                                    <div className="position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className="col-3">
                                <div className="item">
                                    <div className="single-svg-icon-box business-icon-box">
                                        <div className="grid-overlay" style={{backgroundImage: "url(images/service1.jpg)"}}></div>
                                        <div className="inner">
                                            <div className="svg-icon" id="svg-icon-1" data-svg-icon="images/icons/basic_accelerator.svg"></div>
                                            <div className="content">
                                                <h5 className="heading heading-h5">Digital Marketing</h5>
                                                <p>Our Digital Marketing service includes: Drive traffic, build engagement and score meaningful conversions.</p>
                                            </div>
                                            <div className="br-icon-box-btn">
                                                <a href="#">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="item">
                                    <div className="single-svg-icon-box business-icon-box">
                                        <div className="grid-overlay" style={{backgroundImage: "url(images/service1.jpg)"}}></div>
                                        <div className="inner">
                                            <div className="svg-icon" id="svg-icon-1" data-svg-icon="images/icons/basic_accelerator.svg"></div>
                                            <div className="content">
                                                <h5 className="heading heading-h5">Digital Marketing</h5>
                                                <p>Our Digital Marketing service includes: Drive traffic, build engagement and score meaningful conversions.</p>
                                            </div>
                                            <div className="br-icon-box-btn">
                                                <a href="#">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="item">
                                    <div className="single-svg-icon-box business-icon-box">
                                        <div className="grid-overlay" style={{backgroundImage: "url(images/service1.jpg)"}}></div>
                                        <div className="inner">
                                            <div className="svg-icon" id="svg-icon-1" data-svg-icon="images/icons/basic_accelerator.svg"></div>
                                            <div className="content">
                                                <h5 className="heading heading-h5">Digital Marketing</h5>
                                                <p>Our Digital Marketing service includes: Drive traffic, build engagement and score meaningful conversions.</p>
                                            </div>
                                            <div className="br-icon-box-btn">
                                                <a href="#">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="item">
                                    <div className="single-svg-icon-box business-icon-box">
                                        <div className="grid-overlay" style={{backgroundImage: "url(images/service1.jpg)"}}></div>
                                        <div className="inner">
                                            <div className="svg-icon" id="svg-icon-1" data-svg-icon="images/icons/basic_accelerator.svg"></div>
                                            <div className="content">
                                                <h5 className="heading heading-h5">Digital Marketing</h5>
                                                <p>Our Digital Marketing service includes: Drive traffic, build engagement and score meaningful conversions.</p>
                                            </div>
                                            <div className="br-icon-box-btn">
                                                <a href="#">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                    <div className="mb-5"><br/><br/><br/><br/><br/></div>
                </section>                
            </React.Fragment>
        );
    }

}
export default ProductSection;