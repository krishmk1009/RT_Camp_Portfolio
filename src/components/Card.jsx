import React from 'react'
import "./Card.css"
import { Avatar, Container, Typography } from '@mui/material'
 import card from "../assets/card.png"
const Card = () => {
    return (
        <div>
        <Container maxWidth='lg'>
        <div className='main-container'>
            <div className='div-section-1'>
                <h2 className='new-heading'>Your Ideal Candidate
                </h2>
                <p className='new-subheadings'>
                well-suited for this role with a diverse skill set and extensive practical experience. My technical proficiency covers a range of languages and technologies, including CPP, JScript, ReactJS, NodeJS, Python, Blockchain, Solidity, and WordPress .
                </p>

                <p className='new-subheadings'>
                My leadership experience as a Co-founder of Freelon and a group leader for a Web3.0 Portal project at SITS demonstrates my ability to guide teams effectively.
                </p>

                <p className='new-subheadings'>
                   

                    With a track record of leading and managing in over <a className='special-tag'>3 startup </a> environments.
                </p>

                <div >
                    <img className='div-section-1-img' src={card} />

                </div>
            </div>
            <div className='div-section'>
                <div className='card-uppper' >
                    <img  src='https://www.mishainfotech.com/images/fullstacklogo1-1.png'  width={"150px"}/>
                    <Typography className='typo-card' sx={{ fontSize: "18px", fontWeight: "500", marginTop:"10px" }}>
                        View Case Studies &#8594;
                    </Typography>
                </div>
                <div className="card-content">
                    <p>
                        "Excited to bring my diverse technical skills to RT Camp, I aim to elevate the company's projects through proficient coding, innovative problem-solving, and a collaborative approach, ensuring efficient and high-quality outcomes."
                    </p>
                </div>

                <div className='speaker' style={{ display: 'flex' }}>
                    <Avatar alt="Remy Sharp" src="https://i.ibb.co/ZgXg3ZV/1687869097743-modified.png" sx={{ width: 89, height: 89 }} />
                    <div style={{ marginLeft: '16px' }}>
                        <p className='speaker-name'>
                           Krushna Modhave,
                        </p>
                        <p className='speaker-designation'>
                            Full Stack Developer,Pune
                        </p>
                    </div>
                </div>



            </div>
        </div>
            </Container>
        </div>
    )
}

export default Card