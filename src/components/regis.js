import React from "react";
import "./../photo.css";
//import Footer from "./Footer";
import { Form, Button, Row, Col } from "react-bootstrap";
const Header = () => {
  return (
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
                size="text"
                type="text"
                placeholder="กรุณากรอกชื่อผู้ใช้งาน"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              รหัสผ่าน
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณากรอกรหัสผ่าน"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ยืนยันรหัสผ่าน
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณายืนยันรหัสผ่าน"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ชื่อ
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากรอกชื่อ" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              นามสกุล
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณากรอกนามสกุล"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              เพศ
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
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
              <Form.Control size="text" type="text" placeholder="กรุณากรอกเลขบัตรประชาชน" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              เบอร์โทรศัพท์
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากรอกเบอร์โทรศัพท์" />
            </Col>
          </Form.Row>

          <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ที่อยู่
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="" />
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

        <Button type="submit" className="btn btn-blue space">
          สมัครสมาชิก
        </Button>
        <Button type="cancel" className="btn btn-danger">
          ยกเลิก
        </Button>
        <p></p>
        <div class="container signin">
          <p>
            มีปัญชีอยู่แล้ว ? <a href="login">เข้าสู่ระบบ</a> <a href="regisfarm">สมัครสมาชิกสำหรับเกษตรกร</a>
          </p>
        </div>
      </div> 
      </div>    
    </div>
    
  );
};
export default Header;
//<h1 } >ระบบจัดเก็บพันธุ์ประวัติและออกใบพันธุ์ประวัติกระบือออนไลน์</h1></div>
