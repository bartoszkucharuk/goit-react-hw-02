import { useEffect, useState } from 'react'
import Options from './Options/Options.jsx'
import Description from "./Description/Description.jsx"
import Feedback from "./Feedback/Feedback.jsx"

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((feedbackValues) => ({...feedbackValues, [feedbackType]: feedbackValues[feedbackType] + 1}))
  };


  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback} />
      
      <Feedback />
    </>
  )
}

export default App
