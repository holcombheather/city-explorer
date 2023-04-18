import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { CardImg } from 'react-bootstrap';

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
                                <Form onSubmit={this.getCityData}>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" onInput={this.handleCityInput} />
                        <Form.Text className="text-muted">Input a city for valuable information!</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">Explore!</Button>
                </Form>
            </div>
            <div>
                        <Card>
                    <Card.Body>
                        {
                        this.state.error 
                        ? <Card.Text>{this.state.errorMsg}</Card.Text>
                        : <div>
                            <p>City: {this.state.cityData.display_name}</p>
                            <p>Longitude: {this.state.cityData.lon}</p>
                            <p>Latitude: {this.state.cityData.lat}</p>
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