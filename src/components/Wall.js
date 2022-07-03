import React, {useState, useEffect, Fragment} from 'react';
import Card from './Card';
import StarRating from './StarRating';
import '../styles.css';


const Wall = () => {
  //guardo el estado de las peliculas y el de las busquedas por input para después mostrar lo que trae ese estado
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
 
  //guardo en una constante la direccion de la API para traer los datos y el API key
  const API = "9ad86f832fd740cdd747d6c4f1935287";
  const baseURL = "https://api.themoviedb.org/3/";

  //funcion para traer los datos de la API
  const getMovies = async () => {
    const URL = `${baseURL}discover/movie?sort_by=popularity.desc&api_key=${API}`;//endpoint a la base de datos de "tmdb".
    const res = await fetch(URL);
    const resJSON = await res.json();
    setMovies(resJSON.results);//actualizo estado con los datos traídos
    //console.log(resJSON);
  };

  useEffect(() => {
    getMovies();
  }, []);

  //funcion para la busqueda del usuario por el input text (búsqueda del usuario)
  const handleSubmit = async (e) => {
    e.preventDefault();
   // console.log("enviando...");

    try {
      const URL = `${baseURL}search/movie?api_key=${API}&query=${search}`;//el estado search (input del usuario) es la query a la base de datos para traer pelicula específica 
      const res = await fetch(URL);
      const data = await res.json();

      console.log(data);
      console.log(search);
      setMovies(data.results);//actualizo estado con los datos buscados por el usuario
      setSearch('');//actualizo input de búsqueda a vacío
    } 
    catch (e) {
      console.log(e);
    }
  };


//renderizo lo que se va a mostrar
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container pt-2 borde">
          <a className="navbar-brand" href="./">
            <h1 className="titulo">App de Cine</h1>
          </a>
          <div className="d-flex gif" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <h5 className="titulo">Busca tu película</h5>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Movie"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-grid gap-2">
        <StarRating></StarRating>
      </div>
      <div>
        {movies.length > 0 ? (
          <div className="row pt-2 bg-dark">
            <h3 className="titulo">Más populares</h3>
            {movies.map((movie, i) => (
              <Card key={movie.id} {...movie} />
            ))}
          </div>
        ) : (
          <div>
            <h2>
              No se encontraron resultados!
            </h2>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Wall