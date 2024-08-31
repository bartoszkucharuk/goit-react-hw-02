function Options({ updateFeedback, totalFeedback, feedbackReset }) {

  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
        
      {totalFeedback > 0 && <button onClick={feedbackReset}>Reset</button>}

  </div>
  );
};
 
export default Options;