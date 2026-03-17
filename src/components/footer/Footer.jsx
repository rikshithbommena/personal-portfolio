import React from 'react'
import './Footer.css'
import { IoMdHeart, IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {

    const socialLinks = [
        {
            link: "https://www.linkedin.com/in/rikshith-bommena-5a2962290/",
            icon: <FaLinkedin />,
        },
        {
            link: "https://github.com/rikshithbommena",
            icon: <FaGithub />,
        },
        {
            link: 'mailto:rikshithbommena35@gmail.com',
            icon: <IoIosMail />
        }
    ]

    return (
        <div className='text-light footer mt-3'>
            <div className='footer-section'>
                <div className="p-3">
                    <p>Made with <IoMdHeart className='text-danger' /> by rikshith bommena</p>
                    <p>@2026 All rights reserved.</p>
                </div>
                <div className='p-3 social-links'>
                    {socialLinks.map((socialLinks, index) =>
                        <a href={socialLinks.link} key={index} target='_blank' className='text-light me-3 social-icon'>{socialLinks.icon}</a>)}
                </div>
            </div>
            <hr className='text-light'></hr>
            <div className="p-1">
                <p className='text-light text-center'>Built with React.js + Vite</p>
            </div>
        </div>
    )
}

export default Footer;