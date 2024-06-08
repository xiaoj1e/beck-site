// import cat from './applecat.jpeg'
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import sutro from "./images/Sutro.png";
import {Cursor} from './Cursor.js';

function App() {
  // const [hover, setHover] = React.useState(false);
  // const onHover = () => {
  //   setHover(true);
  // };

  // const onLeave = () => {
  //   setHover(false);
  // };
  return (
    <BrowserRouter>
      <Cursor />
      <div
        className="me container text link"
        // onMouseEnter={onHover}
        // onMouseLeave={onLeave}
        role="button"
        tabIndex="-3"
      > {"beck liao"}
      </div>
      {/* <img style={{width: 450}} src={cat} className="Friend" alt="Friend" /> */}
      <div className="text"> is a computer programmer, community organizer, and illustrator</div><br/>
      <img src={sutro} width="500" height="500" alt="Sutro"/> <br/>
      <div className="text">they currently reside in the mission district of san francisco, on unceded Ramaytush Ohlone land <span role="img" aria-label="earth">🌍</span></div> <br/>
      <div className="text"> reach out to <a href = "mailto: beckmliao@gmail.com">beckmliao@gmail.com</a> for any inquiries</div> <br/>
      <span role="img" aria-label="memo">📝</span><a className="text" href="https://drive.google.com/file/d/1n7J5-poXSb94pKMn_o-UdBg5EWvF5let/view?usp=sharing">resume</a>
    </BrowserRouter>
  );
}

export default App;
