import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class AboutSection extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="section bg-about bg-light-about bg-light">
                    <div className="container">
                        <Row>
                            <Col lg="4">
                                <div className="mb-5">
                                    <hr className="h-line1" />
                                    <h5 className="text-dark mb-1 front-weight-light text-uppercase">What We Do</h5>
                                    <div className="position-relative"></div>
                                    <br />
                                    <h3 className="text-dark mb-1 front-weight-light text-uppercase">We provide full-service digital capabilities</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 wow move-up">
                                <div className="blog blog-style--1">
                                    <div className="thumb">
                                        <a href="blog-details.html"><img src="../images/blog-1/blog-01.jpg" alt="Blog Images"/></a>
                                    </div>
                                    <div className="icon-box no-border bg-transparant vibrate-style icon-box-style-2">
                                        <div className="inner d-flex text-leftp">
                                            <div className="grid-overlay service2" style={{backgroundImage: "url(images/service1.jpg)"}}/>
                                            <div className="blog-content blog-position--bottom">
                                                <div className="svg-icon" id="svg-icon-1" data-svg-icon="images/icons/basic_accelerator.svg"/>
                                                    <div className="content">
                                                        <h5 className="heading heading-h5">Digital Marketing</h5>
                                                        <p>Our Digital Marketing service includes: Drive traffic, build engagement and score meaningful conversions.</p>
                                                </div>                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 wow move-up">
                                <div className="blog blog-style--1">
                                    <div className="thumb">
                                        <a href="blog-details.html"><img src="../images/blog-1/blog-01.jpg" alt="Blog Images"/></a>
                                    </div>
                                    <div className="icon-box no-border bg-transparant vibrate-style icon-box-style-2">
                                        <div className="inner d-flex text-leftp">
                                            <div className="grid-overlay service2" style={{backgroundImage: "url(images/service1.jpg)"}}/>
                                            <div className="blog-content blog-position--bottom">
                                                <div className="svg-icon" id="svg-icon-1" data-svg-icon="images/icons/basic_accelerator.svg"/>
                                                    <div className="content">
                                                        <h5 className="heading heading-h5">Digital Marketing</h5>
                                                        <p>Our Digital Marketing service includes: Drive traffic, build engagement and score meaningful conversions.</p>
                                                </div>                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 wow move-up">
                                <div className="blog blog-style--1">
                                    <div className="thumb">
                                        <a href="blog-details.html"><img src="../images/blog-1/blog-01.jpg" alt="Blog Images"/></a>
                                    </div>
                                    <div className="icon-box no-border bg-transparant vibrate-style icon-box-style-2">
                                        <div className="inner d-flex text-leftp">
                                            <div className="grid-overlay service2" style={{backgroundImage: "url(images/service1.jpg)"}}/>
                                            <div className="blog-content blog-position--bottom">
                                                <div className="svg-icon" id="svg-icon-1" data-svg-icon="images/icons/basic_accelerator.svg"/>
                                                    <div className="content">
                                                        <h5 className="heading heading-h5">Digital Marketing</h5>
                                                        <p>Our Digital Marketing service includes: Drive traffic, build engagement and score meaningful conversions.</p>
                                                </div>                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <Row className="align-items-center mt-5">
                            <Col md="6">
                                <div className="about-desc">
                                    <h3 className="text-dark mb-3 font-weight-normal">Performance Solution For AGI Business</h3>
                                    <p className="text-muted f-15">Explanation about AGI Business. Explanation about AGI BusinessExplanation about AGI BusinessExplanation about AGI BusinessExplanation about AGI BusinessExplanation about AGI BusinessExplanation about AGI BusinessExplanation about AGI BusinessExplanation about AGI BusinessExplanation about AGI BusinessExplanation about AGI Business</p>
                                    <div className="about-by">
                                        <p className="font-weight-normal mb-0"><Link to="#" className="text-dark"><i className="mdi mdi-circle-medium text-custom mr-2"></i>
                                            Learn More <span className="text-custom"> About Us</span></Link></p>
                                    </div>
                                </div>
                            </Col>

                            <Col md="6">
                                <div className="about-img light-img position-relative p-4">
                                    <img src="images/about-img.jpg" alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>                
            </React.Fragment>
        );
    }

}
export default AboutSection;