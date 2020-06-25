import React from "react";
import "./../photo.css";
import Footer from "./Footer";
import NavbarLogin from "./navbar";
import { Card, Col,Row} from "react-bootstrap";
import buf from "./images/background.jpg";

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
      <div className="row ">
        <div className="col-md-4">
          
          <Card className="r-margintop border-c4" style={{ width: "25rem" }}>
          <Card.Title >โปรไฟล์</Card.Title>
            <Card.Img  variant="top" src={buf} />
            <Card.Body>
              
              <Row>
              <Col>
              ชื่อ-นามสกุล :
              </Col>
              <Col>
              ณัฐนันท์ เรือนมูล
              </Col>
              </Row>
              <Row>
              <Col>
              รหัสบัตรประชาชน :
              </Col>
              <Col>
              1579900792061
              </Col>
              </Row>
              <Row>
              <Col>
              เพศ :
              </Col>
              <Col>
              ชาย
              </Col>
              </Row>
              <Row>
              <Col>
              ที่อยู่ :
              </Col>
              <Col>
              -
              </Col>
              </Row>
              <Row>
              <Col>
              เบอร์โทร :
              </Col>
              <Col>
              -
              </Col>
              </Row>
              <Row>
              <Col>
              E-mail :
              </Col>
              <Col>
              -
              </Col>
              </Row>
              <Row>
              <Col>
              Facebook :
              </Col>
              <Col>
              -
              </Col>
              </Row>
              <Row>
              <Col>
              Line :
              </Col>
              <Col>
              -
              </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-8 pad-l"  >
          <div className="row coler-bg2 border-c4">
          <div className="row r-margin">
            <Card border="primary" style={{ width: "18rem" , marginRight: "30px"}}>
              <Card.Header>ตรวจสอบสถานะการจัดทำ</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
                  จำนวนรายการสั่งทำทั้งหมด
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary" style={{ width: "18rem" , marginRight: "30px"}}>
              <Card.Header>ตรวจสอบสถานะการจัดทำ</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
                  จำนวนรายการที่รอดำเนินการ
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary" style={{ width: "18rem", marginRight: "10px" }}>
              <Card.Header>ตรวจสอบสถานะการจัดทำ</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
                  จำนวนรายการที่กำลังดำเนินการ
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="row">
          <Card border="primary" style={{ width: "18rem" , marginRight: "30px"}}>
              <Card.Header>ตรวจสอบสถานะการจัดทำ</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
               จำนวนรายการที่เสร็จสิ้น
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary" style={{ width: "18rem" , marginRight: "30px"}}>
              <Card.Header>ตรวจสอบสถานะการจัดทำ</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
                  จำนวนรายการสั่งทำที่ถูกยกเลิก
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary" style={{ width: "18rem" , marginRight: "30px"}}>
              <Card.Header>ตรวจสอบสถานะการจัดส่ง</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
                  จำนวนรายการสั่งทำที่กำลังจัดส่ง
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Header;
