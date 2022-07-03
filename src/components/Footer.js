import React from 'react'
import '../styles.css';


const Footer = () => {

  return (
    <footer className="text-center text-lg-start bg-light">
      <div className="container d-flex justify-content-center py-3">
        <button type="button" className="btn btn-lg btn-floating mx-2">
          <a href="https://www.themoviedb.org/" target={"new"}>
            <img src="tmdb_logo.svg" alt="celular" width={200} height={110} />
          </a>
        </button>
        <button type="button" className="btn btn-lg btn-floating mx-2">
          <a className='ancor' href='https://www.linkedin.com/in/mita-cervantes/' target={"new"}>
            <p> MitaCervantes © 2022 Copyright</p>
          </a>
        </button>
      </div>
    </footer>
  );
}

export default Footer