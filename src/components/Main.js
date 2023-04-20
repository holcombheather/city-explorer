import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
// import Alert from 'react-bootstrap/Alert';
import { CardImg, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityData: [],
            error: false,
            errorMsg: ''
        }
    }

    // Method that handles getting the city input from the user and setting it to state for other functions to use
    handleCityInput = (ev) =>{
        this.setState({
            city: ev.target.value
        })
    }

    // Method that queries LocationIQ for long/lat
    getCityData = async (ev) => {
        ev.preventDefault();

        try {
            // Define URL to pass to axios using the city in state
            let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&q=${this.state.city}&format=json`
            
            // Call to the location IQ API using axios
            let response = await axios.get(url)
            let cityData = response.data[0];

            console.log(cityData);

            let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&center=${cityData.lat},${cityData.lon}&zoom=13`

            // Take return from axios and set that to state
            this.setState({
                cityData: cityData,
                mapUrl: mapUrl,
                error: false
            })

        // Set state with the error boolean and error message
        } catch(error){
        this.setState({
            error: true,
            errorMsg: error.message
        })
        }

    }

    render() {
        return (
            <>
            <div>
                <Form onSubmit={this.getCityData} style={{padding: '20px'}}>
                        <Form.Group>
                            <Row>
                                <Form.Label column="lg" lg={1}>Location</Form.Label>
                            <Col>
                                <Form.Control type="text" onInput={this.handleCityInput} />
                                <Form.Text className="text-muted">Input a city for valuable information!</Form.Text>
                            </Col>
                            </Row>
                                

                        </Form.Group>
                    <Button variant="primary" type="submit">Explore!</Button>
                </Form>
            </div>
            <div className="row justify-content-center align-items-center">
                <Card border="primary" style={{width: '80%', padding: '20px'}}>
                    <Card.Body>
                        {
                        this.state.error 
                        ? <Card.Text>{this.state.errorMsg}</Card.Text>
                        : <div>
                            <Card.Header as="h5" style={{marginTop: '10px'}}>{this.state.cityData.display_name}</Card.Header>
                            <ListGroup>
                                <ListGroupItem variant='secondary'>City: {this.state.cityData.display_name}</ListGroupItem>
                                <ListGroupItem variant='light'>Longitude: {this.state.cityData.lon}</ListGroupItem>
                                <ListGroupItem variant='light'>Latitude: {this.state.cityData.lat}</ListGroupItem>
                            </ListGroup>
                            <CardImg variant="bottom" src={this.state.mapUrl}></CardImg>
                        </div>}
                    </Card.Body>
                </Card>        
            </div>

            </>
        )

    }
}

export default Main;