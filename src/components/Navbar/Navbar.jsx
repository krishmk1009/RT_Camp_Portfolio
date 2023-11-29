import { Container } from '@mui/material'
import React from 'react'
import "./Navbar.css"
import Icon from '../Icon'
import { useState } from 'react'
const Navbar = () => {


    return (
        <div style={{backgroundColor:"#f5f7fa"}}>
     
        <Container maxWidth='lg'>


            <section class="nav-container" >
                <div class="nav-logo">
                    <img src="https://rtcamp.com/wp-content/uploads/sites/2/2020/11/site-logo-black.svg" alt="logo"
                        height="42px" width="202px" />
                </div>

                {/* // desktop menu */}
                <div class="nav-items">
                    <ul>
                        <li>Case Studies</li>
                        <li>Solutions</li>
                        <li>Career </li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>

                </div>


                <div class="nav-mobile">

                    <a href='https://www.github.com/krishmk1009' target='blank' style={{ color: "black" }}> <Icon /></a>

                </div>



            </section>
        </Container>
       
        </div>
    )
}

export default Navbar