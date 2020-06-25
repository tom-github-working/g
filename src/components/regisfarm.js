import React from "react";
import "./../photo.css";
import Footer from "./Footer";
import { Form, Button, Row, Col } from "react-bootstrap";
const Header = () => {
  return (
    <div className="container-fluid">
      <div
        className="row "
        style={{ backgroundColor: "#1900ff", color: "white", padding: "20px" }}
      >
        <div className="col">
          <div className="row size-font">
            การขึ้นทะเบียนกระบือและออกใบพันธุ์ประวัติกระบือออนไลน์
          </div>
          <div className="row size-font-eng">
            {" "}
            Buffalo Registration and Pedigree Online
          </div>
        </div>
      </div>

      <div class="center" className="coler-bg3 border-c" >
      <div className="border-c1">
        <div className="border-c3" style={{ backgroundColor: "#2680EB", color: "white", padding: "20px" }}><h1>สมัครสมาชิก</h1></div>
        
        <p></p>
        <p>กรุณากรอกรายละเอียดให้ครบถ้วน</p>
        <p></p>
        <div style={{fontSize:"50px"}}>
          <Form.Row >
            <Form.Label column="sm" lg={2}style={{fontSize:"20px"}} >
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
        <p className="row"></p>
        <p></p>
        <div className="border-c3" style={{ backgroundColor: "#2680EB", color: "white", padding: "20px" }}>
        <h1 className="size-fontf"> ข้อมูลฟาร์ม</h1>
        
        </div>
        <p className="row"> </p>
        <p className="row"> </p>
        <div>
        <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ชื่อฟาร์ม
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณากรอกชื่อฟาร์ม"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ที่ตั้งฟาร์ม/สถานที่ผลิต
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
              พิกัดฟาร์ม
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="ละติจูด"
              />
            </Col>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="ลองติจูด"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              จำนวนกระบือที่เลี้ยง
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากกรอกจำนวนกระบือที่เลี้ยง" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              วัตถุประสงค์ในการเลี้ยงกระบือ
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณากรอกวัตถุประสงค์"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              การรับรองมาตรฐาน
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>....</option>
                <option>....</option>
              </Form.Control>
            </Col>

          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              การรับรองการปลอดโรค
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>....</option>
                <option>....</option>
              </Form.Control>
            </Col>

          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              การรับรองฟาร์มปลอดสาร
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>....</option>
                <option>....</option>
              </Form.Control>
            </Col>

          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ข้อมูลแรงงาน
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากรอกแรงงาน(คน)" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              การจัดการอาหาร
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>....</option>
                <option>....</option>
              </Form.Control>
            </Col>

          </Form.Row>
          <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              พื้นที่ในการเลี้ยง
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรอกไร่" />
            </Col>
          <Form.Label columm="sm" lg={2} style={{fontSize:"20px"}}>
              
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรอกงาน" />
              
            </Col>

            <Form.Label columm="sm" lg={2} style={{fontSize:"15px"}}>
              
            </Form.Label>
            <Col>
            <Form.Control size="text" type="text" placeholder="กรอกตารางวา" />
            </Col>

            
  </Form.Row>
        <p></p>
        </div>
        <Button type="submit" className="btn btn-blue space">
          สมัครสมาชิก
        </Button>
        <Button type="cancel" className="btn btn-danger">
          ยกเลิก
        </Button>
        <p></p>
        <div class="container signin">
          <p>
            <a href="login">เข้าสู่ระบบ</a>
          </p>
        </div>
      </div>
      </div>
      <div className="row"></div>

    </div>
  );
};
export default Header;
//<h1 } >ระบบจัดเก็บพันธุ์ประวัติและออกใบพันธุ์ประวัติกระบือออนไลน์</h1></div>
