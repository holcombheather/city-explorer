import { Component } from 'react';
import { Alert } from 'react-bootstrap';


class ErrorAlert extends Component {
    render() {
        return (
            <Alert variant="info">
                <Alert.Heading>Unable to Get City Data</Alert.Heading>
                <p>{this.props.errorMessage}</p>
            </Alert>
        )
    }
}

export default ErrorAlert;