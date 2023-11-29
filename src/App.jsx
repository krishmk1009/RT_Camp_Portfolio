import { useState } from 'react'



import { Container } from '@mui/material';

import theme from "./index"
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import Main from './components/main/Main';
import Card from './components/Card';
import Project from './components/Projects/Project';
import New from './components/New/New';
import Footer from './components/Footer/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>


        <Navbar />
        <Main />
        <Card />


        <New />

        <Project />

        <Footer />
      </ThemeProvider>

    </>
  )
}

export default App
