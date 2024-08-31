function Feedback({ feedback, totalFeedback }) {
    return (
        <>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalFeedback}</p>
        </>
        )
    
};
export default Feedback;