import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import "./Project.css"
import ProjectItem from './Item_Grid/ProjectItem'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
const Project = () => {
    return (
        <div>
<Container maxWidth="lg">
      
        <Grid container className='project-container'   >
            <Grid item xs={12}>
                <div>
                    <h2 className='project-heading'>
                        My Projects
                    </h2>
                    <p className='project-subheading'>
                        An Extensive Collection of Diverse Projects Spanning Both My Academic Journey and Professional Ventures

                    </p>
                </div>
            </Grid>
            <ProjectItem image={project1}
                heading="WhatsGPT:Langchain Based Chabot & Plugin"
                desc="Developed an AI chatbot with WhatsApp integration, garnering 3000+ users. Recognized for innovative chatbot development in a news article."
                src="https://whatsgpt.tech/" />
            <ProjectItem image={project2}
                heading="Trading Compass:Financial Data Visualization Platform"
                desc="Contributed as a front-end developer to create a user-friendly financial data visualization platform. Utilized graphical tools to analyze market data for easy analysis."
                src="https://www.tradingcompass.in/"

            />
            <ProjectItem image={project3}
                heading="Freelon: Online Salon Booking Platform"
                desc="Led the successful implementation of a salon booking platform in Ahmednagar. Expanded the user base by partnering with 20+ professional salons." />


            <Grid item xs={12} sx={{ textAlign: "center", margin: "60px" }} >
                <a href='https://drive.google.com/file/d/1GbfgzxUzoQ-GbxLZTAZxlU3zN9SjiafR/view' target='blank'>


                    <button class="btn">
                        Download Resume
                    </button>
                </a>
            </Grid>
        </Grid>
        </Container>
        </div>
    )
}

export default Project