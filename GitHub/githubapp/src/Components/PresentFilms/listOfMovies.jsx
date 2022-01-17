import axios from "axios";

import { CardGroup,Card,Button, Container } from "react-bootstrap";
import { useState, useEffect ,useContext } from "react";

import {LanguageContext } from './../../Context/Context'


const ListingMovies =()=>{
  const{lang,setLang}=useContext(LanguageContext);
  const toggleLang=()=>{
      setLang(lang=== "en" ? "ar" : "en")
  }
    const [films, setFilms] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);

    function goToPreviousPage() {
        if(currentPage>1)
        setCurrentPage(currentPage-1);
      }
      function goToNextPage() {  
        setCurrentPage(currentPage+1);
      }

    const gettingData = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=176c35cd9662bf4c24c600fc76b866b5`,{
            params:{
              page: currentPage
            }
          }
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
        <div className="row" dir={lang=="en"?"ltr":"rtl"}>
          <h1 className="mt-3 mb-4">Movies</h1>
          <h2 className="text-center">{lang}</h2>
       <span> <button className="btn btn-danger float-end" onClick={()=>{toggleLang();}}>Toggle</button></span>

        {films.map((card) => {
          return(
            
            
            <Card key={card.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} />
            <Card.Body>
              <Card.Title>{card.original_title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content
              </Card.Text>
             {/* <Link to="/detailsOfMovie/:id"><Button variant="primary">Go somewhere</Button></Link>  */}
            </Card.Body>
          </Card>
         
          
               
          )
        })
        
        }
        <div className="  mb-5">
               <button type="button" className="btn btn-secondary float-start ms-5 px-5 py-2 mb-5" onClick={()=>{goToPreviousPage();}} >Previous</button>
               <button type="button" className="btn btn-secondary float-end me-5 px-5 py-2 mb-5" onClick={()=>{goToNextPage();}}>Next</button>
              
               </div> 
        </div>
    )
    }

export default ListingMovies;