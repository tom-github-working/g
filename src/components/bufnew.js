import React from "react";
import "./../photo.css";
import Footer from "./Footer";
import { Form, Button, Row, Col } from "react-bootstrap";
import NavbarLogin from "./navbar";
const Header = () => {
  return (
    <div className="container-fluid ">
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
      <NavbarLogin />
      <div class="center" className="coler-bg4 border-c">
        <div  className="border-c1">
        <h1 >รายละเอียดกระบือ</h1>
        <p></p>
        <p >กรุณากรอกรายละเอียดให้ครบถ้วน</p>
        <p></p>
        <p className="row"> </p>
        <div>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ชื่อกระบือ
            </Form.Label>
            <Col>
              <Form.Control
                size="text  "
                type="text"
                placeholder="กรอกชื่อกระบือ"
              />
            </Col>
            
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              น้ำหนักแรกเกิด
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรอกน้ำหนักแรกเกิน"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              หมายเลขประจำตัวกระบือ
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรอกหมายเลขประจำตัวกระบือ"
              />
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              วันหย่านม
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรอกชื่อกระบือ"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              เลขประจำฝูง
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรอกหมายเลขประจำฝูง"
              />
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              น้ำหนักอายุ 1 ปี
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="(ก.ก.)" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              วัน/เดือน/ปี เกิด
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="วว/ดด/ปป" />
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              น้ำหนักอายุ 2 ปี
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="(ก.ก.)" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              เพศ
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือกเพศ..</option>
                <option>เพศผู้</option>
                <option>เพศเมีย</option>
              </Form.Control>
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              น้ำหนักหย่านม
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="(ก.ก.)" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              การผสมพันธุ์
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือกการผสมพันธุ์..</option>
                <option>ผสมตามธรรมชาติ</option>
                <option>ผสมเทียม</option>
              </Form.Control>
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              รอบอก
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="(cm.)" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              สายพันธุ์
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณากรอกสายพันธุ์กระบือ"
              />
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ความสูงของหัวไหล่
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="(cm.)" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ผู้บำรุงสายพันธุ์
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรอกผู้บำรุงสายพันธุ์"
              />
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ความยาวลำตัว
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="(cm.)" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ชื่อพ่อพันธุ์
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรอกชื่อพ่อพันธุ์ (ถ้ามี)"
              />
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ชื่อแม่พันธุ์
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรอกชื่อแม่พันธุ์ (ถ้ามี)"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              หมายเลขประจำตัวพ่อพันธุ์
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="หมายเลขประจำตัวพ่อพันธุ์ (ถ้ามี)"
              />
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              กรอกเลขประจำตัวแม่พันธุ์
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="หมายเลขประจำตัวแม่พันธุ์ (ถ้ามี)"
              />
            </Col>
          </Form.Row>
          <Form>
  
  <div className="mb-3">
    <Form.File id="formcheck-api-regular">
      <Form.File.Label></Form.File.Label>
      <Form.File.Input />
    </Form.File>
  </div>
</Form> 
        </div>
        <Button type="pem" className="btn btn-blue">
          เพิ่มข้อมูลพันธุ์ประวัติ
        </Button>
        <p></p>

        <Button type="regisnew" className="btn btn-blue space">
          บันทึก
        </Button>
        <Button type="cancel" className="btn btn-danger">
          ยกเลิก
        </Button>

        <p></p>   
        
      </div>
      </div>
      
    </div>
  );
};
export default Header;
//<h1 } >ระบบจัดเก็บพันธุ์ประวัติและออกใบพันธุ์ประวัติกระบือออนไลน์</h1></div>
