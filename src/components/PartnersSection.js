import React from 'react';
import { Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';

class PartnersSection extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="section bg-partners">
                    <div className="container">
                        <Row>
                            <Col>
                                <hr className="h-line3" />
                                <div className="mb-5">
                                    <h3 className="text-right text-light mb-1 front-weight-light text-uppercase">Trusted Global Partners</h3>
                                    <div className="position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                    
                        <div className="row mt--60 mt_md--50 mt_sm--30">
                            <div className="col-lg-12">
                                <div className="brand-wrapper">
                                    <div className="brand__list brand-default brand-style--2 brand-business">
                                        <div className="brand"><a href="#"><img src="img/business-2/brand/client-logo-01.png"
                                                    alt="logo image"/></a> </div>
                                        <div className="brand" data-wow-delay=".13s"><a href="#"><img src="img/business-2/brand/client-logo-02.png"
                                                    alt="logo image"/></a> </div>
                                        <div className="brand" data-wow-delay="0.16s"><a href="#"><img src="img/business-2/brand/client-logo-03.png"
                                                    alt="logo image"/></a> </div>
                                        <div className="brand" data-wow-delay="0.19s"><a href="#"><img src="img/business-2/brand/client-logo-04.png"
                                                    alt="logo image"/></a> </div>
                                        <div className="brand" data-wow-delay="0.22s"><a href="#"><img src="img/business-2/brand/client-logo-05.png"
                                                    alt="logo image"/></a> </div>
                                        <div className="brand" data-wow-delay="0.25s"><a href="#"><img src="img/business-2/brand/client-logo-06.png"
                                                    alt="logo image"/></a> </div>
                                        <div className="brand" data-wow-delay="0.25s"><a href="#"><img src="img/business-2/brand/client-logo-07.png"
                                                    alt="logo image"/></a> </div>
                                        <div className="brand" data-wow-delay="0.25s"><a href="#"><img src="img/business-2/brand/client-logo-08.png"
                                                    alt="logo image"/></a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5"></div>
                </section>                
            </React.Fragment>
        );
    }

}
export default PartnersSection;