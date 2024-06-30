import React, { useState, useEffect } from 'react';
import Popup from './components/Popup';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup when the component mounts
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <Popup show={showPopup} onClose={closePopup} />
    </div>
  );
}

export default App;
