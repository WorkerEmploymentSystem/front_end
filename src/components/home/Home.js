import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import NavBar from './Navbar';
import ServiceCard from './ServiceCard';

const Home = () => {
    return (
        <div>
            <NavBar />
            <br /><br /><br /><br /><br />
            <h1 className="myText">OUR SERVICES</h1>
            <br /><br /><br /><br /><br />
            <Container>
                <Row>
                    <Col md={4}>
                        <h1 className="myText">For Customer</h1>
                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>
                        <h1 className="myText">For Worker</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ServiceCard service="Electrician"
                            description="In day and time, we are completely dependent on
                        electricity. Any small breakdown or malfunction can affect our everyday schedule.
                        Our skilled electricians are one solution to all your problems"
                            image="https://image.flaticon.com/icons/png/512/732/732564.png" />
                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>
                        <ServiceCard service="Electrician"
                            description="In this day and time, we are completely dependent on
                        electricity. Any small breakdown or malfunction can affect our everyday schedule.
                        Our skilled electricians are one solution to all your problems"
                            image="https://image.flaticon.com/icons/png/512/732/732564.png" />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ServiceCard service="Plumber"
                            description="Our life comes to a halt when there’s some problem with the plumbing, 
                        which can range from a minor leaking faucet all the way to a major pipe leak.
                        With all the work, you hardly get any time to find a reliable plumber at reasonable rates"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96odLntqtUAnoNzVOM89TR_1aW5EhGk95ww&usqp=CAU" />
                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>
                        <ServiceCard service="Plumber"
                            description="Our life comes to a halt when there’s some problem with the plumbing, 
                        which can range from a minor leaking faucet all the way to a major pipe leak.
                        With all the work, you hardly get any time to find a reliable plumber at reasonable rates"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96odLntqtUAnoNzVOM89TR_1aW5EhGk95ww&usqp=CAU" />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ServiceCard service="Carpenter"
                            description="A lot of energy and time is invested in maintaining furnitures of house. 
                        That is why we are providing you best carpenters."
                            image="https://image.flaticon.com/icons/png/512/732/732555.png" />

                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>
                        <ServiceCard service="Carpenter"
                            description="A lot of energy and time is invested in maintaining furnitures of house. 
                        That is why we are providing you best carpenters."
                            image="https://image.flaticon.com/icons/png/512/732/732555.png" />

                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ServiceCard service="MECHANIC"
                            description="Now get any type of machine repairing service at your doorstep.
                        Our application will help you connect with the best washing machine 
                        repair services to cater to your needs, right from the comfort of your home"
                            image="https://cdn.iconscout.com/icon/premium/png-256-thumb/mechanic-2660275-2212871.png" />
                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>
                        <ServiceCard service="MECHANIC"
                            description="Now get any type of machine repairing service at your doorstep.
                        Our application will help you connect with the best washing machine 
                        repair services to cater to your needs, right from the comfort of your home"
                            image="https://cdn.iconscout.com/icon/premium/png-256-thumb/mechanic-2660275-2212871.png" />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ServiceCard service="PAINTER"
                            description="Give your house as well as life all new look with our best painters.
                        Protect your house from bad weather as well as increase its value."
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfA5bCC2UjHAVpj_ubFHh8IVA2I2-fGRMoNg&usqp=CAU" />
                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>
                        <ServiceCard service="PAINTER"
                            description="Give your house as well as life all new look with our best painters.
                        Protect your house from bad weather as well as increase its value."
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfA5bCC2UjHAVpj_ubFHh8IVA2I2-fGRMoNg&usqp=CAU" />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ServiceCard service="HOUSE_CLEANING"
                            description="Get home cleaning services for protection against dust damage .We have Well Equipped and Trained Workers, 
                        who carries out Deep House Cleaning and Sanitization with Non-Hazardous Chemicals."
                            image="https://cdn1.vectorstock.com/i/1000x1000/88/55/cleaning-house-icon-vector-2678855.jpg" />
                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>
                        <ServiceCard service="HOUSE_CLEANING"
                            description="Get home cleaning services for protection against dust damage .We have Well Equipped and Trained Workers, 
                        who carries out Deep House Cleaning and Sanitization with Non-Hazardous Chemicals."
                            image="https://cdn1.vectorstock.com/i/1000x1000/88/55/cleaning-house-icon-vector-2678855.jpg" />
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Home;