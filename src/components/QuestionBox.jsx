import React, {useState} from 'react';
import QuestionChoice from './QuestionChoice';

const QuestionBox = ({ questions, query, selectchoice }) => {
  // TASK 3: Implement logic to highlight the question text when the "Highlight" button is clicked.
  // You will need to manage state for this. Make the text red when highlighted and blue when not.
  const [isHighlight, setIsHighlight] = useState(false);
  const highlightHandler = () => {
    // Implement the highlight logic
    setIsHighlight(true);
  };
 
  const removeHighlightHandler = () => {
    // Implement the remove highlight logic
    setIsHighlight(false);
  };

  return (
    <>
      <div>
        <h1>Kalvium Quiz</h1>
      </div>
      <div className="questionbox">
        <h1>
          Question: {query + 1} out of {questions.length}
        </h1>
        {/* TASK 3: Change color of this text based on highlight */}
        <h2 style={{color: isHighlight? 'red': 'blue'}}>{questions[query].text}</h2>

        <QuestionChoice
          options={questions[query].options}
          selectchoice={selectchoice}
        />

        <button className="btn btn-slide-1" onClick={highlightHandler}>
          Highlight
        </button>
        <button className="btn btn-slide-2" onClick={removeHighlightHandler}>
          Remove Highlight
        </button>
      </div>
    </>
  );
};

export default QuestionBox;
