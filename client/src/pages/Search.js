import React, { useState } from "react";
import { Container } from "../components/Container";
import API from "../util/API";

function Search() {

  const [book, setBook] = useState();
  const [result, setResult] = useState([]);

  function handleChange(event) {
    const search = event.target.value;
    setBook(search);
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.searchBook(book)
      .then(function(data) {
        console.log(data);
        setResult(data.data.items);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  function saveResult(event) {

    let toSave = result.filter(book => {
      return book.id === event.target.id
    })

    API.saveBook({
      title: toSave[0].volumeInfo.title,
      authors: toSave[0].volumeInfo.authors,
      description: toSave[0].volumeInfo.description,
      image: toSave[0].volumeInfo.imageLinks.smallThumbnail,
      link: toSave[0].volumeInfo.infoLink
    })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  //function incase the authors are not provided
  function authorRender(book) {
    if(book.volumeInfo.authors[0]) {
      return (
        book.volumeInfo.authors.map(author => {
          return (
            <p key={author} className="card-text">{author}</p>
          )
        })
      )
    }
    else {
      return <p>No listed authors.</p>
    }
  };

  //function incase the imageLinks are not available
  function imageRender(book) {
    if(book.volumeInfo.imageLinks) {
      return <img src={book.volumeInfo.imageLinks.smallThumbnail} className="card-img" alt="thumbnail"/>
    }
    else {
      return <h4>No image available.</h4>
    }
  }

  return (
    <Container>
      <br></br>
      <div className="card">
        <div className="card-body">
          <h1>Search Page</h1>
          <div className="card-text">
            <p className="text-muted">Search for your any of your favourite books. (E.g Alice In Wonderland)</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" onChange={handleChange} className="form-control"/>
            </div>
            <div className="text-right">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <br></br>
      <div className="card">
        <div className="card-header">
          Results
        </div>
        <div className="card-body">
          {result.map(book => {
            return (
              <div key={book.id}>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      {imageRender(book)}
                    </div>
                    <div className="col-md-8">
                      <div className="row no-gutters card-header">
                        <div className="col-md-8 text-left">
                          <h4 className="card-title">{book.volumeInfo.title}</h4>
                        </div>
                        <div className="col-md-4 text-right">
                          <button className="btn btn-info" onClick={() => window.open(book.volumeInfo.infoLink, "_blank")}>
                            View
                          </button>
                          &emsp;
                          <button id={book.id} className="btn btn-primary" onClick={saveResult}>
                            Save
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        {authorRender(book)}
                        <p className="card-text">{book.volumeInfo.description}</p>
                        <p className="card-text"><small className="text-muted">Published: {book.volumeInfo.publishedDate}</small></p>
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

export default Search;