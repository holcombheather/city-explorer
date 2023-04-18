import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Header extends Component {
    render() {
        return (
            <>
            <Navbar expand="lg" bg="primary" variant="dark" background-color="blue">
                <Container>
                    <Navbar.Brand>
                    City Explorer
                    </Navbar.Brand> 
                </Container>
            </Navbar>
            </>
        )
    }
}

export default Header;