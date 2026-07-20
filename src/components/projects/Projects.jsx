import React from 'react'
import './Projects.css';
import { Row, Col, Badge, ButtonGroup, Button, Modal, Carousel } from 'react-bootstrap';
import defaultProjectImage from '../../assets/default-project-image.webp';
import { useState } from 'react';
import { FaRegEye, FaGithub } from "react-icons/fa";
import { ImShare } from "react-icons/im";

// importing images
import uberDashboard from '../../assets/uber-dashboard.png';
import uberAuto from '../../assets/vehicle-auto.png';
import uberBike from '../../assets/vehicle-bike.png';
import uberMiniSedan from '../../assets/vehicle-mini-sedan.png';
import uberPremiumSedan from '../../assets/vehicle-premium-sedan.png';
import uberTruck from '../../assets/vehicle-truck.png';
import project1_1 from '../../assets/project-1.1.png';
import project1_2 from '../../assets/project-1.2.png';
import project1_3 from '../../assets/project-1.3.png';

import project2_1 from '../../assets/project-2.1.png';
import project2_2 from '../../assets/project-2.2.png';
import project2_3 from '../../assets/project-2.3.png';

import project3_1 from '../../assets/project-3.1.png';
import project3_2 from '../../assets/project-3.2.png';
import project3_3 from '../../assets/project-3.3.png';

import project4_1 from '../../assets/project-4.1.png';
import project4_2 from '../../assets/project-4.2.png';
import project4_3 from '../../assets/project-4.3.png';


function Projects() {

  const projects = [
    {
  id: 1,
  title: 'Uber Ride Analytics Dashboard',
  description:
    'Interactive Power BI dashboard analyzing Uber bookings, revenue, cancellations, vehicle performance, and customer insights with dynamic filtering.',
  image: uberDashboard,
  technologies: ['Power BI','SQL','DAX','Excel'],
  githubUrl: 'https://github.com/rikshithbommena/Uber-Operations-Dashboard',
  datasetUrl: 'https://github.com/rikshithbommena/Uber-Operations-Dashboard',
  category: 'Data Analysis',
  longDescription:
    'Designed and developed an interactive Uber Ride Analytics Dashboard using Power BI. The dashboard includes dynamic vehicle selection with image switching, KPI cards, booking trends, revenue analysis, cancellation insights, customer and driver ratings, and bookmark-based navigation.',

  multipleImages: [
    uberDashboard,
    uberAuto,
    uberBike,
    uberMiniSedan,
    uberPremiumSedan,
    uberTruck
  ]
},
    {
      id: 2,
      title: 'Chocolate Industry Analysis',
      description: 'End-to-end analysis of chocolate shipment data to identify sales trends, shipment performance, and regional demand using data cleaning, EDA, and dashboards.',
      image: project1_3,
      technologies: ['SQL', 'Python', 'Power Bi','Excel'],
      githubUrl: 'https://github.com/rikshithbommena/Chocolate-Industry-Analysis',
      datasetUrl: 'https://github.com/rikshithbommena/Chocolate-Industry-Analysis/blob/main/sample-chocolate-shipments-data-all-Apr-2025%20(1).xlsx',
      category: 'Data Analysis',
      longDescription: 'This project focuses on end-to-end analysis of a chocolate shipments dataset, aiming to uncover business trends and logistical insights. It involves cleaning, processing, and visualizing data to support data-driven decisions related to supply chain efficiency and market performance.',
      multipleImages: [ project1_3]
    },
    {
      id: 3,
      title: 'Farmers Market Analysis',
      description: 'Analysis of e-commerce sales data to track revenue, customer behavior, and product performance using SQL queries and interactive dashboards.',
      image: project2_2,
      technologies: ['Excel', 'Python', 'Power Bi','SQL'],
      githubUrl: 'https://github.com/rikshithbommena/Farmers-Market-Analysis',
      datasetUrl: 'https://github.com/rikshithbommena/Farmers-Market-Analysis/tree/main/datasets',
      category: 'Data Analysis',
      longDescription: 'This Farmers Market Dashboard is built using Power BI to provide a comprehensive visual representation of key metrics and trends in a local farmers market setting. It helps vendors, customers, and analysts understand sales performance, customer distribution, and product demand at a glance.',
      multipleImages: [ project2_2]
    },
    {
      id: 4,
      title: 'Twitter Sentiment Analysis',
      description: 'Analyzes tweets to identify sentiment trends and factors affecting engagement, providing insights into how emotions and context influence social media interactions.',
      image: project3_1,
      technologies: ['Python ', 'Machine Learning','EDA', 'Scikit-learn for NLP & sentiment scoringp'],
      githubUrl: 'https://github.com/rikshithbommena/Twitter-Sentiment-Analysis',
      datasetUrl: 'https://github.com/rikshithbommena/Twitter-Sentiment-Analysis/tree/main/Dataset',
      category: 'Machine Learning',
      longDescription: 'The goal is to analyze sentiment trends, identify factors influencing tweet popularity, and extract insights based on the language, time, and engagement metrics of tweets. This helps in understanding how emotions propagate on social platforms and how they vary with context.',
      multipleImages: [project3_1]
    },
    

  ]
  // use state for storing selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // creating state for selected project
  const [selectedProject, setSelectedProject] = useState(null);
  // creating state for modal 
  const [showModal, setShowModal] = useState(false);


  // array of categories for rendering buttons
  const categories = ['All', 'Data Analysis', 'Machine Learning'];

  // creating filtered projects
  const fliteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);

  // handle modal
  const handleModal = (project) => {
    setSelectedProject(project);
    setShowModal(true)
  }

  return (
    <div className='projectsSection p-3'>
      <h4 className="mainHeadingInProject text-center display-6 fw-bold mb-3" data-aos="fade-up">Featured Projects</h4>
      <div className="btn-category-group flex-wrap">
        <ButtonGroup className="mt-4 flex-wrap" data-aos="fade-up" data-aos-delay="200">
          {categories.map((cat, index) => <Button key={index} className='m-1 category-btn' size="sm" variant={cat == selectedCategory ? 'primary' : 'outline-primary'} onClick={() => setSelectedCategory(cat)} >
            {cat}
          </Button>)}
        </ButtonGroup>
      </div>
      <div className="projects mt-4">
        {fliteredProjects.length == 0 ? <div className="">
          <h4 className="text-center text-danger mt-5" data-aos="fade-up" data-aos-delay="200">There is no projects available based on filter option!</h4>
          <p className='text-muted text-center' data-aos="fade-up" data-aos-delay="300">Try other filters.</p>
        </div> :
          <Row>
            {/* card */}
            {fliteredProjects.map((project, index) => (
              <Col lg={4} md={4} sm={6} key={index} className='m-auto'>
                <div className='card p-3 m-2 projectCard' data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card-header card-image-wrapper">
                    <img src={project.image} alt={project.title} onError={(e) => e.target.src = defaultProjectImage} className='projectImage' />
                    <div className="overlay">
                      <Button variant='light' onClick={() => handleModal(project)}><FaRegEye /> View More</Button>
                      <a href={project.githubUrl} target='_blank'><Button variant='light'><FaGithub /> Github url</Button></a>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <Badge className='mb-3'>{project.category}</Badge>
                    <h5 className='card-title'>{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    {project.technologies.map((technology, index) => (
                      <Badge bg="secondary" key={index} className='m-1'>{technology}</Badge>
                    ))}

                  </div>
                </div>
              </Col>
            ))}
          </Row>
        }

        {/* modal dialog box */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject &&
              <div className='modal-content p-2'>
                <div>
                  <Carousel interval={1000}>
                    {selectedProject?.multipleImages.map((imageSlide, index) =>
                      <Carousel.Item key={index}>
                        <img src={imageSlide} alt={selectedProject.title} onError={(e) => e.target.src = defaultProjectImage} className="modal-image mb-4"></img>
                      </Carousel.Item>
                    )}
                  </Carousel>
                </div>
                <div className="">
                  <p className='mb-3'>{selectedProject.longDescription}</p>
                  <h4>Technologies Used:</h4>
                  {selectedProject.technologies.map((tech, index) => <Badge key={index} bg="primary" className='mb-2 me-2'>{tech}</Badge>)}
                </div>
              </div>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant={'outline-dark'} className='shadow' href={selectedProject?.githubUrl} target='_blank'><FaGithub /> View Code</Button>
            {selectedProject?.datasetUrl?.length == 0 ? <Button className='disabled' variant='outline-dark'>Data Set Link is not available</Button> : <Button variant={'outline-dark'} className='shadow' href={selectedProject?.datasetUrl} target='_blank'><ImShare /> Data Set</Button>}
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  )
}

export default Projects;