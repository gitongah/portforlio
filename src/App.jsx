import { useState } from 'react'
import About from './components/specific/About'

import './assets/styles/main.css'
import Home from './components/specific/Home'
import Project from './components/specific/Project'
import Services from './components/specific/Services'
import Skills from './components/specific/Skills'
import Contact from './components/specific/Contact'

function App() {

  return (
    <div>
      <Home/>
      <About/>
      <Project/>
      <Services/>
      <Skills/>
      <Contact/>


    </div>
  )
}

export default App
