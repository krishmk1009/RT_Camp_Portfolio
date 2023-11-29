import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import "./New.css"
const New = () => {
    return (
        <div className='new-section'>
            <Container maxWidth="lg">
                <Grid container spacing={0} className='new-section-container'  >


                    <Grid item xs={12} md={7}>

                        <h2 className='new-heading'>
                            Tech Enthusiast
                        </h2>

                        <p className='new-subheading'>
                            Fullstack Developer with Experience in
                            <span style={{ fontWeight: "bold" }}>
                                &nbsp;  4+ Startups.
                            </span>

                        </p>
                        <p className='new-subheading'>

                            I possess hands-on experience from interning at two startups, leading college projects, and co-founding a startup, showcasing a well-rounded background in real-world projects.
                        </p >
                        <a href='https://www.punekarnews.in/pune-students-create-ai-powered-whatsapp-chatbot-whatsgpt-to-offer-instant-information-and-assistance-for-everyday-tasks/#:~:text=Pune%20Students%20Create%20AI%2DPowered,And%20Assistance%20For%20Everyday%20Tasks' target='blank'>

                     
                        <button class="btn1">
                            Read Article                  </button>   </a>

                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div className='img-div'>
                            <img className='new-img' height={"380px"} style={{ mixBlendMode: "darken" }} src='https://astraweb-dev-application.netlify.app/assets/news-ba85ae77.png' />
                        </div>
                    </Grid>


                </Grid>
            </Container>
        </div>
    )
}

export default New