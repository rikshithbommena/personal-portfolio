import { React, useState } from 'react'
import './Contact.css';
import { Row, Col, Container } from 'react-bootstrap';
import { TbMail } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { useForm } from 'react-hook-form';
import { FaLinkedin } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { ImSpinner9 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

function Contact() {
  // contact info
  const contactInfo = [
    {
      id: 1,
      icon: <TbMail />,
      title: "Email",
      link: "mailto:rikshithbommena35@gmail.com",
      detail: "rikshithbommena35@gmail.com"
    },
    {
      id: 2,
      icon: <ImLocation />,
      title: "Location",
      link: "https://maps.app.goo.gl/k9DTeL5FpXHmKADq7",
      detail: "Hyderabad,Telanaga,India"
    }]

  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/rikshith-bommena-5a2962290/",
      icon: <FaLinkedin />,
      color:"#0077b5"
    },
    {
      link: "https://github.com/rikshithbommena",
      icon: <FaGithub />,
      color:"black"
    }]

  // state for mail message
  const [messageStatus, setMessageStatus] = useState("");
  const [errorMessageStatus, setErrorMessageStatus] = useState("");

  // sending message status
  const [isSending, setIsSending] = useState(false);

  // form submission handle function
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // functio to submit the mail
  const onFormSubmit = (emailData) => {
    // spinner
    setIsSending(true);
    emailjs.send("service_c2pm61r", "template_ihbrf2e", emailData, "oYk1Xv8DFrbqn-cWN")
      .then(() => {
        setMessageStatus("Message sent successfully.")
        reset();
      })
      .catch(() => setErrorMessageStatus("Failed to send message, try again later!"))
      .finally(() => setIsSending(false))
  }
  
  return (
    <div className='contacts-section container'>
      <h4 className='text-center display-6 mb-5 fw-bold main-heading-in-contacts'>Get In Touch</h4>
      <p className='text-muted text-center mb-4'>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
      <Row>
        <Col lg={4}>
          <h5 className="mb-4">Contact Information:</h5>
          {contactInfo.map((info, index) => (
            <div className='card mb-3 p-3 shadow contact-card d-flex' key={info.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Row>
                <Col xs={2}>
                  <a className='contact-icon p-2 rounded-circle' data-aos="fade-up">{info.icon}</a>
                </Col>
                <Col xs="10">
                  <h5 className='ms-3'>{info.title}</h5>
                  <a href={info.link} target='_blank' className='contact-link text-primary text-decoration-none ms-3'>{info.detail}</a>
                </Col>
              </Row>
            </div>))}
            <h5 className='mb-3'>Follow Me</h5>
          <div className='d-flex gap-5'>
            {socialLinks.map((link, index) => (
            <a className='text-light socialLink rounded-circle p-2 mb-3' key={index} href={link.link} target="_blank" style={{backgroundColor:link.color,height:'40px',width:'40px'}} data-aos="fade-up" data-aos-delay={index*100}>{link.icon}</a>
            ))}
          </div>
        </Col>

        {/* form */}
        <Col lg={8}>
          <div className='card message-card p-3' data-aos="fade-left" data-aos-delay={200}>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <h5 className='mb-3'>Send me a message</h5>
              <Row>
                <Col lg={6}>
                  <label className='form-label' htmlFor="name">Name*</label>
                  <input type='text' className='form-control mb-3' placeholder='Your Name' {...register("name", { required: true })}></input>
                  {errors.name?.type == "required" && <p className='text-danger'>*Name is required</p>}
                </Col>
                <Col lg={6}>
                  <label className='form-label' htmlFor="yourEmail">Email*</label>
                  <input type='email' className='form-control mb-3' placeholder='your.email@example.com' {...register("email", { required: true })}></input>
                  {errors.email?.type == "required" && <p className='text-danger'>*Email is required</p>}
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <label className='form-label' htmlFor="subject">Subject*</label>
                  <input type='text' className='form-control mb-3' placeholder='Project Discussion' {...register("subject", { required: true })}></input>
                  {errors.subject?.type == "required" && <p className='text-danger'>*Subject is required</p>}
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className='form-label' htmlFor="message">Message*</label>
                  <textarea type='text' className='form-control mb-5 bordered' rows={5} placeholder='Tell me about your project...' {...register("message", { required: true })}></textarea>
                  {errors.message?.type == "required" && <p className='text-danger'>*Message is required</p>}
                </Col>
              </Row>
              {/* message status */}
              {messageStatus?.length !== 0 && <p className="text-center text-success">{messageStatus}</p>}
              {errorMessageStatus?.length !== 0 && <p className="text-center text-danger">{messageStatus}</p>}
              <button type="submit" className='btn submit-button' disabled={isSending}>{isSending ? <span> Sending <ImSpinner9 className='spin' /> </span> : <>Send Message</>}</button>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact;