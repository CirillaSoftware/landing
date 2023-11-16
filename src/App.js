import logo from './logo.svg';
import './App.css';

function App() {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingTop: '56.2225%',
    paddingBottom: 0,
    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
    margin: '1.6em 0.2em', // Adjusted margins for better spacing on mobile
    overflow: 'hidden',
    borderRadius: '8px',
    willChange: 'transform',
  };

  const iframeStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    border: 'none',
    padding: 0,
    margin: 0,
  };

  return (
    <div className="App">
      <div style={containerStyle}>
        <iframe
          loading="lazy"
          style={iframeStyle}
          src="https://www.canva.com/design/DAF0PWxjs68/view?embed"
          allowFullScreen
          allow="fullscreen"
        />
      </div>
      <a
        href="https://www.canva.com/design/DAF0PWxjs68/view?utm_content=DAF0PWxjs68&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
}

export default App;
