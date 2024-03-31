import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./login-page.scss";
import Home from "../components/login/Home";
import Signup from "../components/login/Signup";
import ProtectedRoute from "../components/login/ProtectedRoute";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import LoginForm from "../components/login/LoginForm";

function SignUpPage() {
  return (
    <Container style={{ width: "400px" }} className="login-page ">
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Signup />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpPage;
