import {useState, useEffect } from 'react'
import Options from './Options/Options.jsx'
import Description from "./Description/Description.jsx"
import Feedback from "./Feedback/Feedback.jsx"

function App() {
  const [feedback, setFeedback] = useState(() => {
    const feedbackStorage = window.localStorage.getItem("feedback-storage");
    if (feedbackStorage !== null) {
      return JSON.parse(feedbackStorage);
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

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100): 0 ;
  const feedbackReset = () => { setFeedback({ good: 0, neutral: 0, bad: 0, }) }
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        feedbackReset={feedbackReset} />
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback} />
    </>
  )
}

export default App
