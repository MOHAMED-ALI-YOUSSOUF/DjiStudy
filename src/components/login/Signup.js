import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";
import GoogleButton from "react-google-button";
import {collection, addDoc} from "firebase/firestore";
import {db} from "../../firebase/firebase"

const Signups = () => {
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [lycee, setLycee] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, googleSignUp } = useUserAuth();
  let navigate = useNavigate();
const dbref = collection(db, "users")
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      await addDoc(dbref, {
        Email: email,
        Name: nom,  
        lycee: lycee, 
        Email: email, 
        Password: password});
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    try {
      await googleSignUp(); // Utilisez signUp avec Google ici
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-4 box shadow">
        <h2 className="mb-3">Signup</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="name"
              placeholder="Nom"
              onChange={(e) => setNom(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
              type="text"
              placeholder="Lycée"
              onChange={(e) => setLycee(e.target.value)}
            />
          </Form.Group >      
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
    
      </div>
      <div className="p-4 box mt-3 text-center shadow">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
};

export default Signups;
