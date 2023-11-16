import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div id="mainContainer" className="mainContainer">
        <iframe
          title="cirillaCanvasContent"
          loading="lazy"
          src="https://www.canva.com/design/DAF0PWxjs68/view?embed"
          allowFullScreen
          allow="fullscreen"
        />
      </div>
    </div>
  );
};

export { App };
