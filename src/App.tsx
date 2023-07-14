import React from 'react';
import '../src/App.css';

function App(): JSX.Element {
  return (
    <div className="app-container">
      <iframe
        className="app-iframe"
        src="https://lookerstudio.google.com/embed/reporting/a8019b34-8f43-416f-a4c1-845b99de969e/page/zvPWD"
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default App;