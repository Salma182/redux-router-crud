import React from "react";
import {
    Container,
    Row,
    Col,
    Button
  } from "react-bootstrap";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage= () => {
    const error=useRouteError()
    console.log(error)
const navigate = useNavigate()
    return (
    <Container>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
          <div className="mt-5 text-center">
          <h1>Oops!</h1>  
          <p>Sorry , an unexpected error has occured</p>   
          <p>
            <i>{error.statusText || error.message}</i>
            </p>  
            <Button onClick={()=> navigate("/", {replace: true})} variant="link">Link</Button>   
          </div>
          </Col>
        </Row>
      </Container>
      );
};

export default ErrorPage;