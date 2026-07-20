// importing modules
import React, { useState } from 'react';
import './Home.css';
import { Row, Col } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';
import { ToastContainer, toast } from 'react-toastify';
import profileImage from '../../assets/profile.png';

// importing react icons
import { FaRegEye } from "react-icons/fa";
import { RiDownloadFill } from "react-icons/ri";

function Home() {
  const [showImage, setShowImage] = useState(false);

  // creating function for disabling right click
  const handleToast = () => {
    toast.error('Right click function is disabled!', { position: "top-right" })
  }
  // creating function for disabling right click
  const handleContext = (e) => {
    e.preventDefault();
  }

  // react element
  return (
    <div className='home-content container'>
      <ToastContainer className="mt-5" />
      <Row className="align-items-center">
        <Col lg={6}>
          <div data-aos="fade-up" data-aos-delay="300" className='mb-5'>
            {/* intro name */}
            <h4 className="intro">Hi, i'm <span className="introName">rikshith bommena</span></h4>
            {/* intro role */}
            <p className="introRole"><ReactTyped strings={["Data Analyst", "BI Developer", "SQL Developer", "MIS Executive"]} typeSpeed={40} backSpeed={50} loop></ReactTyped></p>
            {/* intro para */}
            <p className="introPara" data-aos="fade-up" data-aos-delay="400">Data Analyst with skills in SQL, Python, Excel, and Power BI.
              Experienced in data cleaning, exploratory data analysis (EDA), and data transformation.
              Able to create KPI dashboards and generate insights for data-driven decision making.
            </p>
            <div>
              <a href="#projects"><button className="btn btn-warning view-my-work-btn p-2 me-2 text-capitalize mb-3"><FaRegEye /> view my work</button></a>
<a href="/personal-portfolio/Rikshith_Resume.pdf" download>
  <button className="btn btn-danger p-2 download-resume-btn mb-3">
    <RiDownloadFill /> Download Resume
  </button>
</a>            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div
  className="d-flex justify-content-end"
  data-aos="fade-left"
  data-aos-delay="300"
>
            <img
    src={profileImage}
    alt="Rikshith Bommana"
    className="intro-profile-picture"
    onClick={() => setShowImage(true)}
/>
          </div>
        </Col>
      </Row>
    {showImage && (
  <div
    className="image-modal"
    onClick={() => setShowImage(false)}
  >
    <img
      src={profileImage}
      alt="Profile"
      className="image-modal-content"
    />
  </div>
)}
    </div>
  )
}

export default Home;