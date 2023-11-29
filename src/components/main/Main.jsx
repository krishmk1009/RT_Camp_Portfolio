import React from 'react'
import "./main.css"
import { Container } from '@mui/material'
const Main = () => {
    return (
        <div style={{backgroundColor:"#f5f7fa"}}>
            <Container maxWidth='lg'>
                <div class="header-container">


                    <div class="main">
                        <h1 class="main-heading">Great Skills. Great Character.</h1>
                        <h3 class="subheadinng">Web Engineer Trainee Application, Presented by Krushna, a 2023 Computer Science Graduate




                        </h3>

                        <div class="main-btns">
                            <a href='https://github.com/krishmk1009' target='blank' style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>
                                <button class="btn1">

                                    My Github
                                </button>
                            </a>
                            <a href='https://drive.google.com/file/d/1GbfgzxUzoQ-GbxLZTAZxlU3zN9SjiafR/view' target='blank' style={{ color: "black", textDecoration: "none" }}>
                                <button class="btn2">

                                    My Resume
                                </button>
                            </a>
                        </div>

                        <div class="partner">
                            <img class="partner-img" src="https://e7.pngegg.com/pngimages/362/862/png-clipart-react-logo-text-icons-logos-emojis-tech-companies.png" />
                            <img class="partner-img" src="https://s.w.org/style/images/about/WordPress-logotype-wordmark.png" />
                            <img class="partner-img"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/TypeScript_Logo.svg/1200px-TypeScript_Logo.svg.png" />

                            <img class="partner-img" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.png" />
                            <img class="partner-img"
                                src="https://pngimg.com/uploads/mysql/mysql_PNG27.png" />
                        </div>

                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Main