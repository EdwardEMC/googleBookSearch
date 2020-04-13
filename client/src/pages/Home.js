import React from "react";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <br></br>
      <div className="jumbotron">
        <div className="text-center">
          <h1 className="display-4">Google Book Search</h1>
          <br></br>
          <p className="lead">An application to search and save books that <strong>you</strong> want to read!</p>
        </div>
      </div>
      <br></br>
      <div className="text-center">
        <p>A simple to use application to search for your favourite books or the ones you really want to read.</p>
        <p>Click the button below to start searching, from there you can view the book from the google store or save it</p>
        <p>if you are unsure and can decide later!</p>
      </div>
      <br></br>
      <div className="text-center">
        <Link to="/search">
          <button className="btn btn-primary">Start Searching!</button>
        </Link>
      </div>
    </Container>
  );
}

export default Home;