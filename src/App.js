import cat from './applecat.jpeg'

function App() {
  return (
    <>
      <img style={{width: 450}} src={cat} className="Friend" alt="Friend" />
      {/* <div> hi there this is beck's site</div> */}
      <br/>
      <div>beck liao (they/she) is a computer programmer, community organizer, and illustrator &#128444;</div>
      <br/>
      <div>they currently reside in the mission district of san francisco, on ramaytush ohlone land &#127758; reach out to <a href = "mailto: beckmliao@gmail.com">beckmliao@gmail.com</a> for any inquiries</div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       beck site
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
