// const { cacheData } = require('../cache');

import React from 'react';
import { Card, Col } from 'react-bootstrap';

function Movie({ movie }) {
  const imgSrc = `https://image.tmdb.org/t/p/w300/${movie.imgUrl}`;
  const altText = `${movie.title}`;

  return (
    <Col xs={6} md={3} key={movie.id}>
      <Card className="mb-3">
        <Card.Img variant="top" src={imgSrc} alt={altText} className="card-img" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.overview}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Movie;
