import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StarEngine.css';

function StartStopButton() {
    
  /*const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectTo);
  };*/

  return (
    <div className="button-container" /*onClick={handleClick}*/>
      <div className="start-stop-button">
        <div className="inner-circle">
          <p className="text">
            <span>ENGINE</span>
            <span>START</span>
            <span>STOP</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartStopButton;
