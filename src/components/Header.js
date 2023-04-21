import { Component } from 'react';
import headerImg from '../images/headerImg.png';
import '../styling/header.css';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
            <img src={headerImg} className="App-logo" alt="City Explorer" />
          </header>
        )
    }
}

export default Header;