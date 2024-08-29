import React, {useState } from 'react';

function Options() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
	  });
	
	const updateGood = () => {
			setValues({
			...values,
			good: values.good + 1
		});
	};

	const updateNeutral= () => {
		setValues({
			...values,
			neutral: values.neutral + 1
		});
    };
    
    const updateBad = () => {
			setValues({
			...values,
			bad: values.bad + 1
		});
    };
    

  return (
    <div>
      <p>
        Good: {values.good}, Neutral: {values.neutral}, Bad: { values.bad}.
      </p>

      <button onClick={updateGood}>Good</button>
      <button onClick={updateNeutral}>Neutral</button>
      <button onClick={updateBad}>Bad</button>
    </div>
  );
};
 
export default Options;