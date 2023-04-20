import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class SearchForm extends Component {
  render() {
    return (
      <>    
        <Form onSubmit={this.props.onSubmit}>
            <Form.Group>
              <Row>
                <Form.Label>Location</Form.Label>
                <Col>
                  <Form.Control type="text"  onChange={this.props.onInput}/>
                </Col>
              </Row>  
            </Form.Group>
            <Button variant="primary" type="submit">Explore!</Button>
        </Form>  
      </>
    )
  }
}

export default SearchForm;
