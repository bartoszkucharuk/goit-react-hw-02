import { useState } from 'react'
import Options from './Options/Options.jsx'
import Description from "./Description/Description.jsx"
import Feedback from "./Feedback/Feedback.jsx"

function App() {

  return (
    <>
      <Description />
      <Options />
      
      <Feedback />
    </>
  )
}

export default App
