import React, {Component} from "react";
//import "./../photo.css";
import { Link } from "react-router-dom";
//import { Form, Button } from "react-bootstrap";
import firebase from "./firebase/index";


class Logout extends Component {
    logout = e => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <div>
                <Link to ="/"><div className=" floatRight "  onClick={(e)=>this.logout(e)} > ออกจากระบบ </div></Link>
            </div>
        );
    }
}

export default Logout;