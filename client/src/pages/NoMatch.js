import React from "react";
import { Container } from "../components/Container";

function NoMatch() {
  return (
    <Container>
      <div className="jumbotron">
        <div className="text-center">
          <h1 className="text-center">404 Page Not Found</h1>
        </div>
      </div>
    </Container>
  );
}

export default NoMatch;