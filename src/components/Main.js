import { Component } from 'react';
import axios from 'axios';
import { Image, Row, Col, Container } from 'react-bootstrap';
import SearchForm from './SearchForm';
import ErrorAlert from './ErrorAlert';
import CityData from './CityData';
import Weather from './Weather';
import MovieData from './MovieData';
import '../styling/main.css';


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
            lat: '',
            lon: '',
            movieData: []
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
            
            // let response = await axios.get(url);
            // let cityData = response.data[0];
            let cityData = await axios.get(url);

            

            console.log("HERE: ",cityData.data[0].lon);

            let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=13`
            console.log("Map: ",mapUrl);
            
            this.getWeatherData(cityData.data[0].lat,cityData.data[0].lon);
            this.getMovieData(this.state.city);
            
            this.setState({
                cityData: cityData.data[0],
                mapUrl: mapUrl,
                error: false,
                lat: cityData.data[0].lat,
                lon: cityData.data[0].lon,
            })
            console.log("1HERE: ",this.state.lat);


        } catch(error){
        this.setState({
            error: true,
            errorMsg: error.message
        })
        }

    }

    getWeatherData = async (lat, lon) => {
        try {
            // let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}&searchQuery=${this.state.city}`;
            let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`;
            
            let weatherData = await axios.get(weatherUrl)

            this.setState({ 
                forecasts: weatherData.data,
                showWeather: true,
            })            
        } catch (error) {
            console.log(error.message)

            this.setState({
                errorMsg: error.message,
                showWeather: false,
            })
        }

        }

    getMovieData = async (city) => {
        try {
            let movieAPI = `${process.env.REACT_APP_SERVER}/movies?city=${city}`;
            let movieData = await axios.get(movieAPI);
            console.log('Movie Data:',movieData.data)

            this.setState({
                showMovies: movieData.data, 
            })
        } catch (error) {
            this.setState({
                errorMsg: error.message
            })
        }
    }

    render() {
        return (
            <>            
            <Container>
                <Row>
                    <Col>
                        <SearchForm onSubmit={this.getCityData} onInput={this.handleCityInput} />
                    </Col>
                </Row>
                    <Col>
                        {this.state.error ? (
                            <ErrorAlert errorMessage={this.state.errorMsg}/>
                        ) : (
                            <>                            
                            <CityData cityData={this.state.cityData}/>
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
                        <Weather showWeather={this.state.forecasts} forecasts={this.state.forecasts}/>
                        <MovieData showMovies={this.state.showMovies}/>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Main;