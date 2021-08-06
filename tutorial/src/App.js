import './index.css';
import './style.css';

import image from './image.jpg';



function App() {
  return (
    <div className="App">
    
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Fatnassi Nabil</h1>
    <br />
    <div className="imageClass">
    <img src={image} alt="imageinsrc" />
    <br />
    <img src="/imageInPublic.jpg" alt="imageinpublic" />
    </div>
  </div>
  <video width={320} height={240} controls>
    <source src="/Video.mp4" type="video/mp4" />
  </video>

    </div>
  );
}

export default App;
