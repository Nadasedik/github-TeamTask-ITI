import axios from "axios";

import { CardGroup,Card,Button, Container } from "react-bootstrap";
import { useState,useEffect } from "react";



const ListingMovies =()=>{

    const [films, setFilms] = useState([]);

    const gettingData = () => {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=176c35cd9662bf4c24c600fc76b866b5"
        )
        .then((res) => {
          console.log(res);
          const respo = res.data.results;
          console.log(respo);
          setFilms(respo);
        });
    };
  
    useEffect(() => gettingData(), []);

    return(
        <div className="row">
        {films.map((card) => {
          return(
            
            <Card key={card.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} />
            <Card.Body>
              <Card.Title>{card.original_title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
             {/* <Link to="/detailsOfMovie/:id"><Button variant="primary">Go somewhere</Button></Link>  */}
            </Card.Body>
          </Card>
          
          )
        })}
        </div>
    )
    }

export default ListingMovies;