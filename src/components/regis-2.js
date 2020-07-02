import React, {useState} from "react";
import "./../photo.css";
//import Footer from "./Footer";
import { Form, Button, Col } from "react-bootstrap";
import firebase from "./../firebase"
import { Link } from "react-router-dom";
import axios from "axios";

export default function farmerData() {
    const intailState = {
        user: "",
        pass: "",
        email: "",
        fname: "",
        lname: "",
        gender: "",
        id_card: "",
        address: "",
        day_of_birth: "",
        phone_num: "",
    };
    const [account, setAccount] = useState(intailState);
    const [checkpass, setCheckpass] = useState("");
    const [validated] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        firebase
          .auth()
          .createUserWithEmailAndPassword(account.email, account.pass)
          .then((res) => {
            console.log(res.user);
            alert("สำเร็จ");

            axios.post(`http://localhost:4000/user/registor`, {
            user: account.user,
            pass:  account.pass,
            email: account.email,
            fname: account.fname,
            lname: account.lname,
            gender: account.gender,
            id_card: account.id_card,
            address: account.address,
            day_of_birth: account.day_of_birth,
            phone_num: account.phone_num,
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        alert('ลงทะเบียนสำเร็จ');
      })
      .catch(error => {
        console.log(error);
        alert('เกิดความผิดพลาด');

      });
      })
      .catch((error) => {
        var errorCode = error.code;
        

        if (errorCode === "auth/email-already-in-use") {
          alert("Email มีผู้ใช้แล้ว");
        }
        if (errorCode === "auth/invalid-email") {
          alert("กรอกข้อมููลให้ครบ");
        }
        if (errorCode === "auth/weak-password") {
          alert("รหัสผ่านไม่ถูกต้อง");
        }
     
      });
 
  };
  return (
    <Form noValidate validated={validated}>
    <div className="container-fluid ">
      
    <div
      className="row "
      style={{ backgroundColor: "#1900ff", color: "white", padding: "20px" }}
    >
      <div className="col ">
        <div className="row size-font">
          การขึ้นทะเบียนกระบือและออกใบพันธุ์ประวัติกระบือออนไลน์
        </div>
        <div className="row size-font-eng">
          {" "}
          Buffalo Registration and Pedigree Online
        </div>
      </div>
    </div>

    <div class="center" className="coler-bg1 border-c">
      <div className="border-c1">
        <div className="border-c3" style={{ backgroundColor: "#2680EB", color: "white", padding: "20px" }}><h1>สมัครสมาชิก</h1></div>
      
      <p></p>
      <p>กรุณากรอกรายละเอียดให้ครบถ้วน</p>
      <p></p>
      <div>
        <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
            ชื่อผู้ใช้
          </Form.Label>
          <Col>
            <Form.Control
                required
                type="text"
                placeholder="กรุณากรอกชื่อผู้ใช้งาน"
                value={account.user}
                onChange={(e) => {
                    setAccount({ ...account, user: e.target.value });
                  }}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
            รหัสผ่าน
          </Form.Label>
          <Col>
            <Form.Control
                required
                type="text"
                placeholder="กรุณากรอกรหัสผ่าน"
                onChange={(e) => {
                    setAccount({ ...account, pass: e.target.value });
                  }}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
            ยืนยันรหัสผ่าน
          </Form.Label>
          <Col>
            <Form.Control
              required
              type="text"
              placeholder="กรุณายืนยันรหัสผ่าน"
              value={checkpass}
                onChange={(e) => {
                  setCheckpass(e.target.value);
                }}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
            ชื่อ
          </Form.Label>
          <Col>
            <Form.Control 
                required
              type="text"
              placeholder="กรุณากรอกชื่อ" />
              onChange={(e) => {
                setAccount({ ...account, fname: e.target.value });
              }}
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
            นามสกุล
          </Form.Label>
          <Col>
            <Form.Control
              required
              type="text"
              placeholder="กรุณากรอกนามสกุล"
              onChange={(e) => {
                setAccount({ ...account, lname: e.target.value });
              }}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
            เพศ
          </Form.Label>
          <Col>
            <Form.Control 
            as="select" 
            value={account.gender}
            onChange={(e) => {
              setAccount({ ...account, gender: e.target.value });
            }}>
              <option>กรุณาเลือกเพศ..</option>
              <option>ชาย</option>
              <option>หญิง</option>
            </Form.Control>
          </Col>

        </Form.Row>
          
        <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
            เลขบัตรประชาชน
          </Form.Label>
          <Col>
            <Form.Control 
            required
            type="text"
            placeholder="เลขบัตร 13 หลัก"
            value={account.id_card}
            onChange={(e) => {
              setAccount({ ...account, id_card: e.target.value });
            }} />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
            เบอร์โทรศัพท์
          </Form.Label>
          <Col>
            <Form.Control 
            required
            type="text"
            placeholder="เบอร์โทรศัพท์"
            value={account.phone_num}
            onChange={(e) => {
              setAccount({ ...account, phone_num: e.target.value });
            }} />
          </Col>
        </Form.Row>

        <Form.Row>
        <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
            ที่อยู่
          </Form.Label>
          <Col>
            <Form.Control 
            required
            type="text"
            placeholder="บ้านเลขที่ หมู่"
            value={account.address}
            onChange={(e) => {
              setAccount({ ...account, address: e.target.value });
            }}/>
          </Col>
        <Form.Label columm="sm" lg={2} style={{fontSize:"20px"}}>
            จังหวัด
          </Form.Label>
          <Col>
            <Form.Control as="select" size="text">
              <option>กรุณาเลือก..</option>
              <option>เชียงราย</option>
              <option>พะเยา</option>
            </Form.Control>
          </Col>

          <Form.Label columm="sm" lg={2} style={{fontSize:"20px"}}>
            อำเภอ
          </Form.Label>
          <Col>
            <Form.Control as="select" size="text">
              <option>กรุณาเลือก..</option>
              <option>เมือง</option>
            </Form.Control>
          </Col>

          <Form.Label columm="sm" lg={2} style={{fontSize:"20px"}}>
            ตำบล
          </Form.Label>
          <Col>
            <Form.Control as="select" size="text">
              <option>กรุณาเลือก..</option>
              <option>แม่กา</option>
            </Form.Control>
          </Col>
</Form.Row>


<Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
            ช่องทากการติดต่อ
          </Form.Label>
          <Col>
            <Form.Control as="select" size="text">
              <option>กรุณาเลือก..</option>
              <option>E-mail</option>
              <option>Facebook</option>
              <option>Line</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Control size="text" type="text" placeholder="กรุณากรอกรายละเอียด" />
          </Col>
        </Form.Row>

      </div>

      <p></p>

      <Button type="submit" className="btn btn-blue space" onClick={(event) => handleSubmit(event)}>
        สมัครสมาชิก
      </Button>

      <Link to="/login">
      <Button type="cancel" className="btn btn-danger">
        ยกเลิก
      </Button>
      </Link>
      <p></p>
      <div class="container signin">
        <p>
          มีปัญชีอยู่แล้ว ? <a href="login">เข้าสู่ระบบ</a> <a href="regisfarm">สมัครสมาชิกสำหรับเกษตรกร</a>
        </p>
      </div>
    </div> 
    </div>    
  </div>
  </Form>
  )
}