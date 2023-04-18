import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityData: [],
            error: false
        }
    }

    // Method that handles getting the city input from the user and setting it to state for other functions to use
    handleCityInput = (ev) =>{
        this.setState({
            city: ev.target.value
        })
    }

   
        

    // TODO: constructor method to hand data from form
    // TODO: handle error 

    // Method that queries LocationIQ for long/lat 
    getCityData = async (ev) => {
        ev.preventDefault();
        try {
        let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&q=${this.state.city}&format=json`
        
        let cityData = await axios.get(url)

        console.log(cityData.data[0])

        this.setState({
            cityData: cityData.data[0],
            error:false
        })
    }   catch(error){
        this.setState({
            error: true,
            errorMsg: error.message
        })
    }

    }

    // TODO: constructor method to query LocationIQ for long/lat
    // TODO: Define URL to pass to axios using the city in state

    // TODO: Call to the location IQ API using axios

    // TODO: Take return from axios and set that to state

    // TODO: Set state with the error boolean and error message

    render() {
        return (
            <>
                <Form onSubmit={this.getCityData}>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" onInput={this.handleCityInput} />
                        <Form.Text className="text-muted">Input a city for valuable information!</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">Explore!</Button>
                </Form>
                    {/* //TO DO: Component to render results of display_name, latitude, longitude
                    //TO DO: Display error message */}
                <Card>
                    <p>{this.state.cityData.display_name}</p>
                </Card>
            </>
        )

    }
}

export default Main;