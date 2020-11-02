import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const api_url = "https://the-one-api.dev/v2";

  // const [quotes, setQuotes] = useState([]);
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   getBooks();
  // }, []);

  const getBooks = async () => {
    const response = await fetch(`${api_url}/book`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });

    const data = await response.json();
    console.log(data);
    setBooks(data.docs);
  };

  return (
    <div className="App">
      <div className="container d-flex flex-column align-items-center">
        {books.map((book) => (
          <p>{book.name}</p>
        ))}
        <div className="blockquote">
          <Button variant="primary" onClick={getBooks}>
            Get LOTR books
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
