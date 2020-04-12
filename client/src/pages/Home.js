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
        <p>How to use</p>
        <p>How to use</p>
        <p>How to use</p>
        <p>How to use</p>
        <p>How to use</p>
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