import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Movie from './Movie';

class MovieData extends Component {
  render() {
    let movieCards;

    if (this.props.showMovies) {
      movieCards = this.props.showMovies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ));
    }

    return (
      <Container>
        <Row xs={1} md={4} className="g-4">
          {movieCards}
        </Row>
      </Container>
    );
  }
}

export default MovieData;


// import { Component } from 'react';
// import { Container, Card, Row, Col } from 'react-bootstrap';


// class MovieData extends Component {
//     render() {
//         let movieCards;

//         if (this.props.showMovies) {
//             movieCards = this.props.showMovies.map((movie) => {
//                 let imgSrc = `https://image.tmdb.org/t/p/w300/${movie.imgUrl}`;
//                 let altText = `${movie.title}`;

//                 return (
//                     <Col xs={6} md={3} key={movie.id}>
//                         <Card className="mb-3">
//                             <Card.Img variant="top" src={imgSrc} alt={altText} className="card-img" />
//                             <Card.Body>
//                                 <Card.Title>{movie.title}</Card.Title>
//                                 <Card.Text>{movie.overview}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 );
//             });
//         }

//         return (
//             <Container>
//                 <Row xs={1} md={4} className="g-4">
//                     {movieCards}
//                 </Row>
//             </Container>
//         );
//     }
// }


// export default MovieData;




