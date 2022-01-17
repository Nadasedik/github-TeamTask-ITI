import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails=()=>{
    const params = useParams();

    const [movie, setMovie] = useState({});
    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=176c35cd9662bf4c24c600fc76b866b5`)
        .then((res) => setMovie(res.data))
        .catch((err) => console.log(err));
    }, []);


    return (
        <Row className="col-5 mx-auto my-5">
        <Card className="mx-auto p-0">
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <Card.Body>
            <Card.Title><h1>{movie.original_title}</h1></Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
            <Card.Text>
            {movie.release_date}
            </Card.Text>
            <Card.Text>{movie.vote_average}<i className="bi bi-star-fill" style={{color:"yellow"}}></i></Card.Text>
        </Card.Body>
        </Card>
        </Row>

    );
}
export default MovieDetails