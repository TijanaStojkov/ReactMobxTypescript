import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
          className="text-center "
        >
          <h1 className="text-white">Unique Login Form</h1>
          <div className="form-login">
            <h4>Secure Login</h4>
            <br />
            <input
              type="text"
              id="userName"
              className="form-control input-sm chat-input"
              placeholder="username"
            />
            <br />
            <br />
            <input
              type="text"
              id="userPassword"
              className="form-control input-sm chat-input"
              placeholder="password"
            />
            <br />
            <br />
            <div className="wrapper">
              <span className="group-btn">
                <a href="/" className="btn btn-danger btn-md">
                  Login <i className="fas fa-sign-in-alt" />
                </a>
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <div className="footer text-white text-center">
        <p>
          © 2020 . All rights reserved | Design by Tijana Stojkov
          <a href="/">My portfolio</a>
        </p>
      </div>
    </Container>
  );
};
export default Login;
