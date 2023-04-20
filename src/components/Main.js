import { Component } from 'react';
import axios from 'axios';
import { Image, Row, Col, Container, Form, Button } from 'react-bootstrap';
// import CityWeather from './Weather';
import SearchForm from './SearchForm';
import ErrorAlert from './ErrorAlert';
import CityData from './CityData';
// import Weather from './Weather';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityData: {},
            mapUrl: '',
            error: false,
            errorMsg: '',
            forecasts: [],
            showWeather: false,
        }
    }

    // Method that handles getting the city input from the user and setting it to state for other functions to use
    handleCityInput = (ev) =>{
        this.setState({
            city: ev.target.value
        })
    }

    getCityData = async (ev) => {
        ev.preventDefault();

        try {
            let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&q=${this.state.city}&format=json`
            
            let response = await axios.get(url);
            let cityData = response.data[0];

            console.log(cityData);

            let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&center=${cityData.lat},${cityData.lon}&zoom=13`

            this.setState({
                cityData: cityData,
                mapUrl: mapUrl,
                error: false
            })

            // let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?&searchQuery=${this.state.cityData.display_name}`;
            // // let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}&searchQuery=${this.state.city}`;

            // let weatherData = await axios.get(weatherUrl)

            // this.setState({ 
            //     forecasts: weatherData.data,
            //     showWeather: true,
            //     error: false,
            // });
            // console.log('Weather: ' + this.state.forecasts);

        } catch(error){
        this.setState({
            error: true,
            errorMsg: error.message
        })
        }

    };

    render() {
        return (
            <>            
            <Container>
                <Row>
                    <Col>
                        {/* <Form onSubmit={this.getCityData} style={{padding: '20px'}}>
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
                </Form> */}
                        <SearchForm onSubmit={this.getCityData} onInput={this.handleCityInput} />
                    </Col>
                </Row>
                    <Col>
                        {this.state.error ? (
                            <ErrorAlert errorMessage={this.state.errorMsg}/>
                        ) : (
                            <>                            
                            <CityData cityData={this.state.cityData} />
                            </>

                        )}
                    </Col>
                <Row>
                    <Col>
                        <Image src={this.state.mapUrl}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <Weather showWeather={this.state.forecasts}/> */}
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Main;