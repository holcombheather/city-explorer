import { Component } from "react";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class CityData extends Component {
    render(){
        return (
            <>            
            <Card>            
                <Card.Header as="h5" style={{marginTop: '10px'}}>{this.state.cityData.display_name}</Card.Header>
                <Card.Body>
                    <ListGroup>
                        <ListGroupItem variant='secondary'>City: {this.state.cityData.display_name}</ListGroupItem>
                        <ListGroupItem variant='light'>Longitude: {this.state.cityData.lon}</ListGroupItem>
                        <ListGroupItem variant='light'>Latitude: {this.state.cityData.lat}</ListGroupItem>
                        <ListGroupItem variant='light'>Weather: {this.state.cityData.forecasts}</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default CityData;