import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class AboutSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            AboutList: [{
                "icon": "mdi mdi-lightbulb",
                "title": "Creative Design",
                "content": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
            }, {
                "icon": "mdi mdi-projector-screen",
                "title": "Strategy Solutions",
                "content": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
            }, {
                "icon": "mdi mdi-nature",
                "title": "Dynamic Growth",
                "content": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
            },
            ]
        };
    }

    render() {
        return(
            <React.Fragment>
                <section className="section bg-about bg-light-about bg-light">
                    <div className="container">
                        <Row>
                            <Col lg="4">
                                <div className="mb-5">
                                    <h3 className="text-dark mb-1 front-weight-light text-uppercase">About Us</h3>
                                    <div className="position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {this.state.AboutList.map((about, index) => {
                                return <Col lg="4" key={index}>

                                            <div className="about-box about-light text-center p-3">
                                                <div className="about-icon mb-4">
                                                    <i className={about.icon}></i>
                                                </div>
                                                <h4 className="font-weight-light"><Link to="#" className="text-dark">{about.title}</Link></h4>
                                                <p className="text-muted f-14">{about.content}</p>
                                            </div>

                                       </Col>
                            })}
                        </Row>
                    </div>

                </section>
            </React.Fragment>
        );
    }

}
export default AboutSection;