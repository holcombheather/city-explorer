import { Component } from "react";
import { Col, Card, CardGroup } from 'react-bootstrap';

class Weather extends Component {
    render(){
        console.log('Weather props: ', this.props.showWeather);
        console.log('Weather props: ', this.props.forecasts);
        
        let forecastCards;
        if (this.props.forecasts) {
            forecastCards = this.props.forecasts.map((forecast) => {
                return <Col xs={6} md={3}>
                    <Card>
                        <Card.Header>{forecast.date}</Card.Header>
                        <Card.Body>{forecast.description}</Card.Body>
                    </Card>
                </Col>
            });
        }

        return (
            <>            
            <Card >            
                <Card.Header as="h5" style={{marginTop: '10px'}}>Weather Forecast:</Card.Header>
                <Card.Body>
                    <CardGroup>
                       {forecastCards}
                    </CardGroup>
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default Weather;
   
   
   // handleWeather = async (lat, lon) => {
    //     let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}&searchQuery=${this.state.city}`;
        
    //     let weatherData = await axios.get(weatherUrl);
    // }

                // this.handleWeather(cityData.data[0].lat, cityData.data[0].lon);
            // let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}&searchQuery=${this.state.city}`;
