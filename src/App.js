import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const api_url = "https://the-one-api.dev/v2";
  const API_KEY = `${process.env.REACT_APP_API_KEY}`;

  // const [quotes, setQuotes] = useState([]);
  // const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);

  // const getBooks = async () => {
  //   const response = await fetch(`${api_url}/book`, {
  //     headers: {
  //       Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  //     },
  //   });

  //   const data = await response.json();
  //   console.log(data);
  //   setBooks(data.docs);
  // };

  const getMovies = async () => {
    const response = await fetch(`${api_url}/movie`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });

    const data = await response.json();
    console.log(data);
    setMovies(data.docs);
  };

  return (
    <div className="App">
      <div className="container d-flex flex-column align-items-center">
        {movies.map((movie) => (
          <p>{movie.name}</p>
        ))}
        <div className="blockquote">
          <Button variant="primary" onClick={getMovies}>
            Get LOTR movies
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
