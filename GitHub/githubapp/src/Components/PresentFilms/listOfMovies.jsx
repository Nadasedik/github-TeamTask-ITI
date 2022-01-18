import axios from "axios";
import { Link } from "react-router-dom"
import { CardGroup,Card,Button, Container ,Form, FormControl} from "react-bootstrap";
import { useState,useEffect } from "react";



const ListingMovies =()=>{

    const [films, setFilms] = useState([]);
    var [searchText,setSearchText]=useState({});
    const changeHandler=(e)=>{
      setSearchText(e.target.value);
    }

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

    //search movies
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=176c35cd9662bf4c24c600fc76b866b5&query=${searchText}`)
      .then((res) => {
          setFilms(res.data.results);
      })
      .catch((err) => console.log(err));
    },[searchText]);
  
    //get all movies
    useEffect(() => gettingData(), []);

    return(
     
        // <div className="row" dir={lang=="en"?"ltr":"rtl"}>
        //   <h1 className="mt-3 mb-4">Movies</h1>
        //   <h2 className="text-center">{lang}</h2>
       
       <>
      <div className="row my-5 mx-5">
      <Form className="d-flex">
        <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>{changeHandler(e)}}
        />
        <Button variant="outline-success">Search</Button>
    </Form>
      </div>
        <div className="row">

        {films.map((card) => {
          return(
            
            <Card key={card.id} style={{ width: '18rem' }}>
            <Link to={`/movie-details/${card.id}`}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} />
            </Link>
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
   </>
        // </div>
    )
   
    }

export default ListingMovies;