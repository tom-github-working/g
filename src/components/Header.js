import React from "react";
import "./../photo.css";
import Footer from "./Footer";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "./images/ควายป่า_2.jpg";

const Header = () => {
  return (

    <div className="body">
    <div className="container-fluid ">
      <div
        className="row "
        style={{ backgroundColor: "#1900ff", color: "white", padding: "20px"  }} 
      >
        
        <div className="col">
          <div className="row size-font ">
            การขึ้นทะเบียนกระบือและออกใบพันธุ์ประวัติกระบือออนไลน์
          </div>
          <div className="row size-font-eng">
            {" "}
            Buffalo Registration and Pedigree Online
          </div>
        </div>

        <div className="col-1 font-right ">
          <Link to="/login"><button className="button">
          
              เข้าสู่ระบบ
            
          </button>
          </Link>
        </div>
        <div className="col-1 font-right">
          <Link to="/regis"><button className="button">
            สมัครสมาชิก
          </button>
          </Link>
        </div>
      </div>
      <div className="row"></div>
      <div className="photo">
        <div className="center2">
          <div className="row size-font1">
            <h1 className="one size-font1">
              Buffalo Registration and Pedigree Online
              <h1 className="size-font2 ped-d1">
                การขึ้นทะเบียนกระบือและออกใบพันธุ์ประวัติกระบือออนไลน์
              </h1>
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};
export default Header;
//<h1 } >ระบบจัดเก็บพันธุ์ประวัติและออกใบพันธุ์ประวัติกระบือออนไลน์</h1></div>
