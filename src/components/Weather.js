import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    const weatherData = this.props.showWeather;

    let forecastCards;
    if (weatherData) {
      forecastCards = weatherData.map((forecast) => (
        <WeatherDay
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
        />
      ));
    }

    return (
      <>
        <Card>
          <Card.Header as="h5" style={{marginTop: '10px'}}>Weather Forecast:</Card.Header>
          <Card.Body>
            <CardGroup>
              {forecastCards}
            </CardGroup>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Weather;


// import { Component } from "react";
// import { Col, Card, CardGroup } from 'react-bootstrap';

// class Weather extends Component {
//     render(){
//         console.log('Weather props: ', this.props.showWeather);
        
//         let forecastCards;
//         if (this.props.forecasts) {
//             forecastCards = this.props.forecasts.map((forecast) => {
//                 return <Col xs={6} md={3}>
//                     <Card>
//                         <Card.Header>{forecast.date}</Card.Header>
//                         <Card.Body>
//                             <Card.Text>{forecast.description}</Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             });
//         }

//         return (
//             <>            
//             <Card >            
//                 <Card.Header as="h5" style={{marginTop: '10px'}}>Weather Forecast:</Card.Header>
//                 <Card.Body>
//                     <CardGroup>
//                        {forecastCards}
//                     </CardGroup>
//                 </Card.Body>
//             </Card>
//             </>
//         )
//     }
// }

// export default Weather;
  