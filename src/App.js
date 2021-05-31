import React from "react";
import Profile from "./Profile/Profile.js";
import app from "./App.css";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap, { Container, Nav, Navbar } from 'react-bootstrap'

function App() {
  var username = "Aida Brahim";
  function handleName() {
    alert("the name of the profile user is : " + username);
  }

  return (
   
    <div className="App">
      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Hello</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      <Profile
        fullName={username}
        bio="age:28"
        profession="JS Student"
        handleName={handleName}
      ></Profile>
    </div>
  );
}

export default App;
