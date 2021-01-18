import React from 'react';
import { Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';

class NextStepSection extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="section bg-partners">
                    <div className="container">
                        <Row>
                            <Col>
                                <div className="mt--228">
                                    <h3 className="text-left text-light mb-1 front-weight-light text-uppercase">Take The Next Step</h3>
                                    <div className="position-relative"></div>
                                    <Row>
                                        <hr className="h-line4 mt--37" />
                                        <hr className="h-line5 mt--37" />
                                        <hr className="h-line6 mt--37" />
                                    </Row>
                                    <Row>
                                        <h4 className="text-left text-light mb-1 mt--23 mr--176 front-weight-light">Speak with an expert</h4>
                                        <h4 className="text-center text-light mb-1 mt--23 mr--226 front-weight-light">Speak with an expert</h4>
                                        <h4 className="text-right text-light mb-1 mt--23 front-weight-light">Speak with an expert</h4>
                                    </Row>
                                    
                                        

                                </div>
                            </Col>
                        </Row>
                    
                        
                    </div>
                    <div className="mb-5"></div>
                </section>                
            </React.Fragment>
        );
    }

}
export default NextStepSection;