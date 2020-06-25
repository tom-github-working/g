import React from "react";
import "./../photo.css";
import Footer from "./Footer";
import NavbarLogin from "./navbar";
import buf from "./images/background.jpg";
import { Form, Button, Row, Col,InputGroup,FormControl,Table} from "react-bootstrap";
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
      <NavbarLogin />
      <div class="center" className="coler-bg5 border-c" >
      <div className="border-c1" >
        <div className="border-c3" style={{ backgroundColor: "#2680EB", color: "white", padding: "20px" }}>
        <h1>ค้นหา ติดตามสถานะการขึ้นทะเบียน</h1>
        </div>
        <p className="row"> </p>
        <p className="row"> </p>
        
      <div>
      <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"15px"}}>
              ค้นหาโดยเลขประจำฝูง
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากรอกรายละเอียด" />
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"15px"}}>
              ชื่อกระบือ
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากรอกรายละเอียด" />
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"15px"}}>
              ชื่อผู้ใช้
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากรอกรายละเอียด" />
            </Col>
               <Button type="submit" lg={2} className="btn btn-blue space">
          ค้นหา
          
        </Button>
          </Form.Row>
          <p className="row"> </p>
          <p className="row"> </p>
          <Table striped bordered hover>
  <thead>
    <tr>
    <th>ลำดับ</th>
      <th>เลขประจำฝูง</th>
      <th>ชื่อกระบือ</th>
      <th>ชื่อผู้สั่งทำ</th>
      <th>การชำระเงิน</th>
      <th>จำนวนเงิน</th>
      <th>สถานะสั่งทำ</th>
      <th>รายละเอียด</th>
      <th>เช็คสถานะและยกเลิก</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
  
</Table>
<ul class="pagination justify-content-end" style={{margin:"20px"}}>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>

    <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
  </ul>

  
      </div>
      </div>
     </div>
     </div>
     
    )
  };
  export default Header;