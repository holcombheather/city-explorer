import { Component } from 'react';
import { Alert } from 'react-bootstrap';


class ErrorAlert extends Component {
    render() {
        return (
            <Alert variant="danger">
                <Alert.Heading>Error: Unable to Get City Data</Alert.Heading>
                <p>{this.props.errorMessage}</p>
            </Alert>
        )
    }
}

export default ErrorAlert;