import React, {Component} from "react";
import "./../photo.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import firebase from "./../firebase/index";
import Dash from "./dash";
import Footer from "./Footer";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
      currentUser: null
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSignIn = e => {
    e.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {})
      .catch(error => {
        this.setState({
          message: error.message
        });
        alert("ชื่อผู้ใช้รหัสผ่านไม่ถูกต้อง");
      });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        });
      }
    });
  }

  showLogin = () => {
    return (

      <div className="photo ">

        <div className="center">
          <Form className="coler-bg"
          onSubmit={this.handleSignIn}>
          <Form.Label className="size-font3">ลงชื่อเข้าใช้</Form.Label>
            <Form.Group controlId="formBasicEmail">
              <p></p>
              <p></p>
              <p></p>
              <Form.Control required name = "email" type="text" placeholder="ชื่อผู้ใช้" onChange={this.onChange} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control required name = "password" type="password" placeholder="รหัสผ่าน" onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="จำรหัสผ่าน" />
            </Form.Group>

              <p> </p>
              <Button variant="primary" type="submit">
                เข้าสู่ระบบ
              </Button>

              <p> </p>
            <Link to="/dash">
              <Button variant="primary" aria-disabled="true" type="submit">
                เข้าสู่ระบบ
              </Button>
            </Link>
          </Form>
        </div> 
      </div>
    );
  };

  render() {
    if (this.state.currentUser) {
      return <Dash currentUser={this.state.currentUser} />;
    }
    return <div className="container-fluid ">{this.showLogin()}</div>;
    
  }
}

export default Login;