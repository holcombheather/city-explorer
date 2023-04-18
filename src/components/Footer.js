import { Component } from 'react';
import { Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Container className="row justify-content-center align-items-center">
                <h6 style={{padding: '20px', color:'GrayText'}}>Designed by Heather Holcomb</h6>    
            </Container>
        )
    }
}

export default Footer;