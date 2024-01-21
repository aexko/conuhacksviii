import React from 'react';
import './css/SurveyDone.css'
import './css/Components.css'
import { useLocation, useNavigate } from 'react-router-dom';

const SurveyDone = () => {
    const navigate = useNavigate()
    const {state} = useLocation()
    const {valid} = state

  return (
    <div className="survey-done-container">
      <h2>Survey Completed</h2>
      {valid ? (
        <p className="eligible-message">
          You are eligible! You can contact your local blood donation centre
          here: ...
        </p>
      ) : (
        <p className="not-eligible-message">
          Although you are not eligible at the moment, you can check back
          later.
        </p>
      )}
      <button className='button' onClick={() => navigate('/')}>Go back to main page</button>
    </div>
  );
};

export default SurveyDone;
