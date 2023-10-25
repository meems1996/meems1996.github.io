import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <a href="http://localhost:3000/">
      <img src="/logo192.png" alt="Your App Logo" class="logo" style={{ userSelect: 'none' }} />
      </a>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{flex: '1', padding: '40px', marginLeft: '20px', border: 'px solid #000'}}>
            <h1 className='fade-in'>
            The Dedicated Home for Avid Readers to Connect, Explore, and Share
            </h1>
            <p className='fade-in'>
              No need to be on several social media apps to talk about books. We deserve our own home - an app for talking all about books without the distractions of non book related posts on our feed!
            </p>
            <a href="https://muisujfym9w.typeform.com/to/hCRhoRRu">
            <button className="button-51">Request to join our beta 🐉</button>
            </a>
            <p style={{fontSize:'15px', color: '#484848'}}>We are keeping the app invite only for a limited time.</p>
          </div>
          <div style={{flex: '1', padding: '40px', border: 'px solid #000'}}>
            {/* put an image. Put app screenshots */}
            <img src="/mobileapp.png" alt="Your App Logo" class="mobileapp" style={{ userSelect: 'none' }} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
