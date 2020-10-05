import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import fakeData from './fakeData';
import image1 from './images/ITHelp.png'
import image2 from './images/babySit.png'
import image3 from './images/newBooks.png'
import image4 from './images/clothSwap.png'
import image5 from './images/birdHouse.png'
import image6 from './images/studyGroup.png'
import image7 from './images/riverClean.png'
import image8 from './images/clearnPark.png'
import image9 from './images/cleanWater.png'
import image10 from './images/foodCharity.png'
import image11 from './images/driveSafety.png'
import image12 from './images/voteRegister.png'
import image13 from './images/musicLessons.png'
import image14 from './images/libraryBooks.png'
import image15 from './images/childSupport.png'
import image16 from './images/refuseShelter.png'
import image17 from './images/goodEducation.png'
import image18 from './images/animalShelter.png'
import image19 from './images/stuffedAnimals.png'
import image20 from './images/schoolSuffiles.png'
import logo from './logos/Group 1329.png'
import { Link } from 'react-router-dom';










const Home = () => {
    return (
        <div>
            <div>
            <img style = {{marginLeft: '120px', marginTop: '20px', width: '200px'}}src={logo} alt=""/>
            </div>
            
            
                    <Container>
                    <br/>
                    
                    <Row>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image1}/>
                                <Card.Body>
                <Card.Title>{fakeData[0].title}</Card.Title>
                                    
                                    <Link to="/register/ITHelp"> <Button variant="primary">Register</Button>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>
    
                        </Col>
                        <Col>
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image2} />
                                <Card.Body>
                                    <Card.Title>{fakeData[1].title}</Card.Title>
                                    
                                    <Link to="/register/Babysit"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
    
                        </Col>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image3} />
                                <Card.Body>
                                    <Card.Title>{fakeData[2].title}</Card.Title>
                                    
                                    <Link to="/register/New books for children"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                    </Row>
    
                    
                </Container>

                <Container>
                    <br/>
                    
                    <Row>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image4} />
                                <Card.Body>
                <Card.Title>{fakeData[3].title}</Card.Title>
                                    
                                    <Link to="/register/Host a clothing swap"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                        <Col>
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image5} />
                                <Card.Body>
                                    <Card.Title>{fakeData[4].title}</Card.Title>
                                    
                                    <Link to="/register/Build birdhouses"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
    
                        </Col>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image6} />
                                <Card.Body>
                                    <Card.Title>{fakeData[5].title}</Card.Title>
                                    
                                    <Link to="/register/Host a group study"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                    </Row>
    
                    
                </Container>

                <Container>
                    <br/>
                    
                    <Row>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image7} />
                                <Card.Body>
                <Card.Title>{fakeData[6].title}</Card.Title>
                                    
                                    <Link to="/register/Host a river clean-up"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                        <Col>
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image8} />
                                <Card.Body>
                                    <Card.Title>{fakeData[7].title}</Card.Title>
                                    
                                    <Link to="/register/Clean up your local park"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
    
                        </Col>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image9} />
                                <Card.Body>
                                    <Card.Title>{fakeData[8].title}</Card.Title>
                                    
                                    <Link to="/register/Clean water for children"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                    </Row>
    
                    
                </Container>

                <Container>
                    <br/>
                    
                    <Row>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image10} />
                                <Card.Body>
                <Card.Title>{fakeData[9].title}</Card.Title>
                                    
                                    <Link to="/register/Food Charity"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                        <Col>
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image11} />
                                <Card.Body>
                                    <Card.Title>{fakeData[10].title}</Card.Title>
                                    
                                    <Link to="/register/Arrange Seminar(Driving safety)"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
    
                        </Col>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image12} />
                                <Card.Body>
                                    <Card.Title>{fakeData[11].title}</Card.Title>
                                    
                                    <Link to="/register/Teach people how to register to vote"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                    </Row>
    
                    
                </Container>

                <Container>
                    <br/>
                    
                    <Row>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image13} />
                                <Card.Body>
                <Card.Title>{fakeData[12].title}</Card.Title>
                                    
                                    <Link to="/register/Give free music lessons"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image15} />
                                <Card.Body>
                                    <Card.Title>{fakeData[14].title}</Card.Title>
                                    
                                    <Link to="/register/Child Support"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                        <Col>
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image14} />
                                <Card.Body>
                                    <Card.Title>{fakeData[13].title}</Card.Title>
                                    
                                    <Link to="/register/Organize books at the library"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
    
                        </Col>
                        
                    </Row>
    
                    
                </Container>

                <Container>
                    <br/>
                    
                    <Row>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image16} />
                                <Card.Body>
                <Card.Title>{fakeData[15].title}</Card.Title>
                                    
                                    <Link to="/register/Refuge Shelter"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                        <Col>
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image17} />
                                <Card.Body>
                                    <Card.Title>{fakeData[16].title}</Card.Title>
                                    
                                    <Link to="/register/Good Education"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
    
                        </Col>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image18} />
                                <Card.Body>
                                    <Card.Title>{fakeData[17].title}</Card.Title>
                                    
                                    <Link to="/register/Foster a shelter animal"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                    </Row>
    
                    
                </Container>

                <Container>
                    <br/>
                    
                    <Row>
                        <Col>
    
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image19} />
                                <Card.Body>
                <Card.Title>{fakeData[18].title}</Card.Title>
                                    
                                    <Link to="/register/Collect stuffed animals"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                        <Col>
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image20} />
                                <Card.Body>
                                    <Card.Title>{fakeData[19].title}</Card.Title>
                                    
                                    <Link to="/register/Collect school supplies"> <Button variant="primary">Register</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
    
    
                        </Col>
                        <Col>
    
    
    
                        </Col>
                    </Row>
    
                    
                </Container>

                

           

        

        </div>




    );
};

export default Home;