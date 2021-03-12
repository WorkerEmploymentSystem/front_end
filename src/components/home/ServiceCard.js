import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';

const ServiceCard = (props) => {
    return (
        <div>
            <Card style={{ backgroundColor: 'white', height: '500px' }}>
                <CardImg height="200px" top width="100%"
                    src={props.image}
                    alt="Card image" />
                <CardBody style={{ textAlign: 'center', color: 'black' }}>
                    <CardTitle style={{ color: 'black' }} tag="h2" >{props.service}</CardTitle>
                    <hr />
                    <p>{props.description}</p>
                </CardBody>
            </Card>
        </div>
    );
}

export default ServiceCard;