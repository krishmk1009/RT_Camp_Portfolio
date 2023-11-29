import React from 'react'
import { Grid, Typography } from '@mui/material'
import "../Project.css"
const ProjectItem = ({ image, heading, desc,src }) => {
    return (
        <Grid container  spacing={5} sx={{ paddingTop: "40px" }} >
            <Grid item xs={12} md={6}>
                <div >
                <a href={src} target='blank'>

               
                    <img className='project-img' src={image} height={295} width={564} />
                 </a>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <div>
                <a href={src} style={{textDecoration:"none"}} target='blank'>

               
                    <h3 className='heading-3-tag' style={{lineHeight:"40px"}}>
                        {heading}

                    </h3>
                    </a>
                    <p className='project-desc'  >
                        {desc}
                    </p>
                    <a href={src } target='blank'>

                    
                    <Typography  className='typo-card' sx={{ fontSize: "18px", fontWeight: "400", padding: "10px 0" }}>
                        Explore the Project &#8594;
                    </Typography>
                    </a>
                </div>
            </Grid>

        </Grid>
    )
}

export default ProjectItem