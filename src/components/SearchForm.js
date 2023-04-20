import { Component } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

class SearchForm extends Component {
  render() {
    console.log('Search form props: ', this.props);
    return (
      <>    
        <Form onChange={this.props.onFormChange}>
            <Form.Group>
              <Row>
                <Form.Label>Location</Form.Label>
                <Col>
                  <Form.Control type="text" onInput={this.handleCityInput} />
                  <Form.Text className="text-muted">Input a city for valuable information!</Form.Text>
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
