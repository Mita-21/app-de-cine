import React, {useState, useEffect} from 'react'
import { StyledStar } from './styles/StyledStar';
import {StyledCard} from './styles/StyledCard';
import Card from './Card';
import '../styles.css';


const StarRating = () => {
  //guardo el estado del valor del id del input (selected) y los datos traidos de la API (ratings).
  const [selected, setSelected] = useState(false);
  const [ratings, setRatings] = useState([]);

  //guardo en una constante las direccions de la API para traer los datos.
  const API = "9ad86f832fd740cdd747d6c4f1935287";
  const baseURL = "https://api.themoviedb.org/3/";
  const API_IMG="https://image.tmdb.org/t/p/w500/";

  //funcion para traer las peliculas por rating
  const getRatingMovies = async () => {
    const URL = `${baseURL}movie/popular?api_key=${API}&page=5`;
    const res = await fetch(URL);
    const data = await res.json();
    setRatings(data.results);
    //console.log(data.results);
  };

  useEffect(() => {
    getRatingMovies();
  }, []);

  //funcion para la busqueda del usuario por el input estrella, maneja el estado selected para ver que
  //se va a renderizar según el id clickeado en el input estrella.
  const handleInputChange = (e) => {
    e.preventDefault();
   //console.log(e.target.id)
    setSelected(e.target.id);
  };

  //guardo en una constante lo que se va a renderizar segun el filtro que le pongo a los datos cuando
  //ya los haya traido (estado ratings)
  const firstStars = (
    <div className='row pt-2 cardRate'>
      {ratings
        .filter((movie) => movie.vote_average >=0 && movie.vote_average <=2 )
        .map((movie) => (
          <>
            <Card  
              key={movie.id}           
              image={API_IMG + movie.poster_path}
              movieId={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              rating= {movie.vote_average}
            />
          </>
        ))}
    </div>
  );
  const secondStars = (
    <div className='row pt-2 cardRate'>
      {ratings
        .filter((movie) => movie.vote_average >=2 && movie.vote_average <=4 )
        .map((movie) => (
          <>
            <Card   
              key={movie.id}          
              image={API_IMG + movie.poster_path}
              movieId={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              rating= {movie.vote_average}
            />
          </>
        ))}
    </div>
  );
  const thirdStars = (
    <div className='row pt-2 cardRate'>
      {ratings
        .filter((movie) => movie.vote_average >=4 && movie.vote_average <=6 )
        .map((movie) => (
          <>
            <Card   
              key={movie.id}         
              image={API_IMG + movie.poster_path}
              movieId={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              rating= {movie.vote_average}
            />
          </>
        ))}
    </div>
  );
  const fourthStars = (
    <div className='row pt-2 cardRate'>
      {ratings
        .filter((movie) => movie.vote_average >=6 && movie.vote_average <=8 )
        .map((movie) => (
          <>
            <Card   
              key={movie.id}         
              image={API_IMG + movie.poster_path}
              movieId={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              rating= {movie.vote_average}
            />
          </>
        ))}
    </div>
  );
  const fifthStars = (
    <div className='row pt-2 cardRate'>
      {ratings
        .filter((movie) => movie.vote_average >=8 && movie.vote_average <=10 )
        .map((movie) => (
          <>
            <Card    
              key={movie.id} 
              image={API_IMG + movie.poster_path}
              movieId={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              rating= {movie.vote_average}
            />
          </>
        ))}
    </div>
  );

  //renderizo lo que se va a mostrar: se muestran los input estrella y luego según el id recibido en el handleInputChange
  //(estado selected) se renderizan los datos filtrados del estado ratings (firstStars...etc). 
  return (
    <>
    <StyledStar>    
      <section className="star-wrapper media">
        <span className="star-group">
        <h3 className='rate'>Busca por rating</h3>
          <input onClick={handleInputChange} type="radio" id="rating-10" name="rating" />
          <label htmlFor="rating-10">5</label>

          <input onClick={handleInputChange} type="radio" id="rating-8" name="rating" />
          <label htmlFor="rating-8">4</label>

          <input onClick={handleInputChange} type="radio" id="rating-6" name="rating" />
          <label htmlFor="rating-6">3</label>

          <input onClick={handleInputChange} type="radio" id="rating-4" name="rating" />
          <label htmlFor="rating-4">2</label>

          <input onClick={handleInputChange} type="radio" id="rating-2" name="rating" />
          <label htmlFor="rating-2">1</label>

          <input type="radio" id="default" name="rating" className="star-empty"/>
          <label htmlFor="default-state">empty</label>
        </span>
      </section>
    
    <StyledCard>
      {selected === "rating-2"
              ? firstStars
              : selected === "rating-4" 
              ? secondStars
              : selected === "rating-6" 
              ? thirdStars
              : selected === "rating-8" 
              ? fourthStars
              : selected === "rating-10" 
              ? fifthStars
              : null}
        </StyledCard>
     </StyledStar>
    </>
  );
}

export default StarRating