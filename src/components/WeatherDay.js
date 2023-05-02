import React from 'react';
import { Col, Card } from 'react-bootstrap';

function WeatherDay(props) {
  return (
    <Col xs={6} md={3}>
      <Card>
        <Card.Header>{props.date}</Card.Header>
        <Card.Body>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default WeatherDay;