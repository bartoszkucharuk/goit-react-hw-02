import {useState, useEffect } from 'react'
import Options from './Options/Options.jsx'
import Description from "./Description/Description.jsx"
import Feedback from "./Feedback/Feedback.jsx"
import Notification from "./Notification/Notification.jsx"
import './App.css'


function App() {

  const savedFeedback = window.localStorage.getItem("saved-feedback");
  const [feedback, setFeedback] = useState(savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 });
  
  const updateFeedback = (feedbackType) => {
    setFeedback((feedbackValues) => ({...feedbackValues, [feedbackType]: feedbackValues[feedbackType] + 1}))
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100): 0 ;
  
  const feedbackReset = () => {
    setFeedback(
      { good: 0,
        neutral: 0,
        bad: 0,
      });
  }

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        feedbackReset={feedbackReset}
        totalFeedback={totalFeedback} />
        
      {totalFeedback > 0 ?
        (<Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback} />)
        : (<Notification />)}
    </>
  )
}

export default App
