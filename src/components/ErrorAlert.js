import { Component } from 'react';
import { Alert } from 'react-bootstrap';


class ErrorAlert extends Component {
    render() {
        return (
            <Alert>{this.state.errorMsg}
            </Alert>
        )
    }
}

export default ErrorAlert;