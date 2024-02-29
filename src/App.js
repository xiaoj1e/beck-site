import cat from './applecat.jpeg'

function App() {
  return (
    <>
      <img style={{width: 450}} src={cat} className="Friend" alt="Friend" />
      <div> hi there this is beck's site</div>
      <br/>
      <div>beck liao is a community organizer, computer programmer, and illustrator.
      they currently reside in the mission district of san francisco. reach out to <a href = "mailto: beckmliao@gmail.com">beckmliao@gmail.com</a> for any inquiries</div>
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
