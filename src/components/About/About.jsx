// importing modules
import React from 'react'
import './About.css';
import { Row, Col } from 'react-bootstrap';
import { FaCode, FaLaptopCode, FaMobile, FaServer } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";


// importing image
import software_digital_image from '../../assets/software_digital_pic.jpg';

function About() {

  // services data
  const services = [
    {
      icon: <FaCode />,
      title: 'Data Cleaning & Preparation',
      description: 'Clean and structure raw data using SQL, Python, and Excel to make it ready for analysis.'
    },
    {
      icon: <FaServer />,
      title: 'Exploratory Data Analysis (EDA)',
      description: 'Analyze datasets to find patterns, trends, and insights that support decision-making.'
    },
    {
      icon: <TbWorld />,
      title: 'Data Visualization & Dashboards',
      description: 'Build interactive dashboards in Power BI and Excel to track KPIs and visualize data.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Business Insights & Reporting',
      description: 'Convert data into clear insights and reports that help businesses make better decisions.'
    }
  ];

  // react element
  return (
    <div className='bg-light aboutMeSection'>
      <div className='mt-3 container'>
        <h4 className="aboutMeHeading" data-aos="fade-up">About Me</h4>
        <div className="about-content mt-2">
          <Row>
            <Col lg={6}>
              <div data-aos="fade-right" data-aos-delay={100}>
                <img src={software_digital_image} alt="about me" className="aboutMeImage rounded mt-2" width="100%" />
              </div>
            </Col>
            <Col lg={6}>
              <div data-aos="fade-left" className='about-info' data-aos-delay={100}>
                <h4 className='mb-4 display-4 fw-semibold mt-4'>Passionate Developer & Problem Solver</h4>
                <p className='mb-4'>I am an aspiring Data Analyst with strong skills in SQL, Python, Excel, and Power BI. I enjoy working with data to clean, analyze, and transform it into meaningful insights that help businesses make better decisions.

                </p>
                <p className='mb-4'>
                  I have experience performing exploratory data analysis (EDA), writing advanced SQL queries, and building interactive dashboards to track KPIs and visualize trends. My focus is on turning raw data into clear, actionable insights through structured analysis and effective data visualization.
                </p>

                <p className='mb-4'>                 I am currently looking for entry-level opportunities where I can apply my analytical skills, grow as a data professional, and contribute to solving real-world business problems using data.
                </p>
                <div>
                  <Row>
                    <Col sm={6} className='list-unstyled'>
                      <li><strong>Name:</strong> Bommena Rikshith</li>
                      <li><strong>Age:</strong> 22</li>
                      <li><strong>Experience:</strong> Fresher</li>
                    </Col>
                    <Col sm={6} className='list-unstyled'>
                      <li><strong>Location:</strong> Hyderabad,Telangana,India</li>
                      <li><strong>Email:</strong> rikshithbommena35@gmail.com</li>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="aboutRolesSection mt-3">
          <h4 className="text-center mb-3 mt-2" data-aos="fade-up">What I Do</h4>
          <div className='mt-2'>
            <Row>
              {services.map((service, index) => (
                <Col lg={3} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className='card text-center p-3 m-1'>
                    <div className='card-img-top mb-2'>{service.icon}</div>
                    <h4 className='card-title'>{service.title}</h4>
                    <p className='card-text'>{service.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;