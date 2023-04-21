import { Component } from "react";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class CityData extends Component {
    render(){
        console.log('Search form props: ', this.props.cityData);
        return (
            <>            
            <Card>            
                <Card.Header as="h5" style={{marginTop: '10px'}}>{this.props.cityData.display_name}</Card.Header>
                <Card.Body>
                    <ListGroup>
                        <ListGroupItem variant='secondary'>City: {this.props.cityData.display_name}</ListGroupItem>
                        <ListGroupItem variant='light'>Longitude: {this.props.cityData.lon}</ListGroupItem>
                        <ListGroupItem variant='light'>Latitude: {this.props.cityData.lat}</ListGroupItem>
                        {/* <ListGroupItem variant='light'>Weather: {this.props.cityData.forecasts}</ListGroupItem> */}
                    </ListGroup>
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default CityData;