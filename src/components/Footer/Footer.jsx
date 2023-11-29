import React from 'react'
import "./Footer.css"
import { Container } from '@mui/material';

const Footer = () => {
    return (
        <footer className='footer-class'>


            <Container maxWidth="lg" className='footer-container' sx={{ display: "flex" }} >


                <div className='footer-section1'>

                    <p className='footer-heading'>
                        About Krushna


                    </p>

                    <p className='footer-content'>
                       Computer Science Grad From Pune, Graduated in 2023 from Sinhgad Institue,Pune. <a href='#'>Read More</a>
                    </p>
                    <img style={{width:"200px"}} className='footer-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxk4d6NYgjQDjwikqC47XbWKl-7-kNl6ZAw&usqp=CAU' />


                </div>

                <div className='footer-section2'>

                    <div className='footer-menu1'>
                        <p className='footer-heading'>
                            Company
                        </p>
                        <div className='footer-links'>
                            <p>Case Studies</p>
                            <p>Solutions</p>
                            <p>Careers</p>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Contact</p>
                        </div>

                    </div>
                    <div className='footer-menu2'>
                        <p className='footer-heading'>
                            Contact Me
                        </p>

                        <div className='footer-links'>

                            <p ><a style={{color:"black" , textDecoration:"none"}} href="mailto:krushnamk1009@gmail.com" target="_blank">Send Mail</a></p>
                            <p><a style={{color:"black" , textDecoration:"none"}}  href="https://www.linkedin.com/in/krushnamodhave/" target="_blank">LinkedIn</a></p>
                            <p><a style={{color:"black" , textDecoration:"none"}}  href="https://www.instagram.com/ig_krish_mk/" target="_blank">Instagram</a></p>
                            <p><a style={{color:"black" , textDecoration:"none"}}  href="https://twitter.com/ModhaveKrushna" target="_blank">Twitter</a></p>
                            <p><a style={{color:"black" , textDecoration:"none"}}  href="https://github.com/krishmk1009" target="_blank">GitHub</a></p>
                            <p><a style={{color:"black" , textDecoration:"none"}}  href="https://stackoverflow.com/users/20028533/krish" target="_blank">Stack Overflow</a></p>

                        </div>
                    </div>


                </div>

                <div className='footer-section3'>

                    <p className='footer-heading'>
                    Just a call away from hiring the best candidate for the role of Web Engineer Trainee.

                    </p>
                    <div className='footer-input-box'>
                        <button class="btn1">
                            +91 7028951009
                        </button>
                    </div>

                



                </div>



            </Container>

            <Container maxWidth="lg" className='footer-container2' sx={{ display: "flex", justifyContent: "space-between" }} >



                <p className='footer-copyright'>
                    © rtCamp Inc.,  2023. Personalized rtCamp Portfolio.
                </p>
                <p className='footer-copyright'>
                    © rtCamp Inc.,  2023. Personalized rtCamp Portfolio.
                </p>
            </Container>
        </footer>
    )
}

export default Footer