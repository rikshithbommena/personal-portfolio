import React from 'react'
import './Skills.css';
import { Row, Col } from 'react-bootstrap';

// importing icons
import { FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaNpm, FaGithub, FaGitSquare } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { RiJavascriptFill, RiFileExcel2Line } from "react-icons/ri";
import { BsDatabaseDash } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";
import { TbBrandPython, TbBrandOffice } from "react-icons/tb";
import { SiExpress, SiMongodb, SiSimpleanalytics } from "react-icons/si";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { IoLogoTableau } from "react-icons/io5";
import { MdInsights } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { LuNotebook, LuServer } from "react-icons/lu";
import { RiMicrosoftLoopLine } from "react-icons/ri";

function Skills() {

  // technical skills 
  const frontend = [
    { name: "SQL", logo: <TbBrandMysql /> },
    { name: "Python", logo: <TbBrandPython /> },
    { name: "Excel", logo: <RiFileExcel2Line /> },
    { name: "Data Cleaning", logo: <BsDatabaseDash /> },
    { name: "EDA", logo: <FaRegLightbulb /> }
  ];

  const backend = [
    { name: "Power BI", logo: <SiSimpleanalytics /> },
    { name: "Tableau", logo: <IoLogoTableau /> },
    { name: "KPI", logo: <MdInsights /> }
  ]

  const tools = [
    { name: "Power Point", logo: <PiMicrosoftPowerpointLogo /> },
    { name: "MS Office", logo: <TbBrandOffice /> },
    { name: "Jupyter Notebook", logo: <LuNotebook /> },
    { name: "Github", logo: <FaGithub /> }
  ]
  
  const databases = [
    { name: "MS SQL Server", logo: <LuServer /> },
    { name: "Micro soft fabric", logo: <RiMicrosoftLoopLine /> },
  ]

  return (
    <div className='skillsSection p-4'>
      <h4 className='text-center display-6 fw-bold mt-4 mb-3 mainHeadingInSkillsSection' data-aos="fade-up">Skills & Technologies</h4>
      <Row>
        <Col lg={6} className='p-3' data-aos="fade-right">
          <h4 className='skillsHeading fs-3 mb-2'>Technical Skills</h4>
          <div className="card skills-bg-card p-3">
            <h3 className='fs-4 mb-3' data-aos="fade-up">Programming Languages:</h3>
            <Row>
              {frontend.map((skill, index) => (
                <Col xs={6} sm={4} md={4} lg={4} className='m-auto' key={index}>
                  <div className="card m-1 text-center skills-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                    <p className='skillLogo'>{skill.logo}</p>
                    <div className='card-body'>
                      <h2 className='fs-5'>{skill.name}</h2>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <h3 className='fs-4 mb-3 mt-3' data-aos="fade-up">Data Visualization:</h3>
            <Row>
              {backend.map((skill, index) => (
                <Col xs={6} sm={4} md={4} lg={4} key={index} className='m-auto'>
                  <div className='card m-1 text-center skills-card p-1' data-aos="fade-up" data-aos-delay={index * 100}>
                    <p className="skillLogo">{skill.logo}</p>
                    <div className="card-body">
                      <h2 className='fs-4'>{skill.name}</h2>
                    </div>
                  </div>
                </Col>))}
            </Row>
          </div>
        </Col>

        <Col lg={6} className='p-4' data-aos="fade-left">
          <h4 className='skillsHeading fs-3'>Tools & Platforms</h4>
          <div className="card skills-bg-card p-3">
            <Row>
              {tools.map((tool, index) => (
                <Col xs={6} sm={4} md={4} lg={4} key={index} className='m-auto'>
                  <div className='card m-1 text-center skills-card' data-aos="fade-up" data-aos-delay={index * 100}>
                    <p className="skillLogo">{tool.logo}</p>
                    <div className="card-body">
                      <h2 className='fs-5'>{tool.name}</h2>
                    </div>
                  </div>
                </Col>))}
            </Row>
            <h3 className='fs-4 mb-3 mt-3' data-aos="fade-up">Databases & Platforms:</h3>
            <Row>
              {databases.map((tool, index) => (
                <Col xs={6} sm={4} md={4} lg={4} key={index} className='m-auto'>
                  <div className='card m-1 text-center skills-card' data-aos="fade-up" data-aos-delay={index * 100}>
                    <p className="skillLogo">{tool.logo}</p>
                    <div className="card-body">
                      <h2 className='fs-5'>{tool.name}</h2>
                    </div>
                  </div>
                </Col>))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Skills