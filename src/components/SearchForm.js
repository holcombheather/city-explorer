import React, { Component } from 'react';
import { Form, Button, Row, Col, FloatingLabel, Container } from 'react-bootstrap';
import '../styling/searchForm.css';

class SearchForm extends Component {
  render() {
    return (
      <Container >    
        <Form onSubmit={this.props.onSubmit} classname="formContain">
            <Form.Group>
              <Row>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Location" className="mb-3">
                <Form.Control className="FormControl" type="text"  placeholder="Enter a city name here" onChange={this.props.onInput}/>
                </FloatingLabel>
              <Button variant="secondary" size="lg" type="submit">Explore!</Button>
              </Col>
              </Row>  
            </Form.Group>
        </Form>  
      </Container>
    )
  }
}

export default SearchForm;

