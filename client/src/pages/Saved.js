import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import API from "../util/API";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    savedBooks()
  }, []);

  function savedBooks() {
    API.getBooks()
      .then(function(result) {
        setBooks(result.data);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  function removeBook(event) {
    API.deleteBook(event.target.id)
      .then(function(result) {
        savedBooks();
      })
      .catch(function(result) {
        console.log(result);
      });
  }

  return (
    <Container>
      <br></br>
      <div className="card bg-dark">
        <div className="card-header text-white text-center">
          <h1>Saved books Page</h1>
        </div>
        <div className="card-body">
          {books.map(book => {
            return (
              <div key={book._id}>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={book.image} className="card-img" alt="thumbnail"/>
                    </div>
                    <div className="col-md-8">
                      <div className="row no-gutters card-header bg-warning">
                        <div className="col-md-8 text-left">
                          <h4 className="card-title">{book.title}</h4>
                        </div>
                        <div className="col-md-4 text-right">
                          <button className="btn btn-info" onClick={() => window.open(book.link, "_blank")}>
                            View
                          </button>
                          &emsp;
                          <button id={book._id} className="btn btn-danger" onClick={removeBook}>
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        {book.authors.map(author => {
                          return (
                            <p key={author} className="card-text">{author}</p>
                          )
                        })}
                        <p className="card-text">{book.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  );
}

export default Saved;