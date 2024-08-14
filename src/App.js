
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pageContent">
      <header className="App-header">
        <p className='mainHeaderText'>treine.me</p>
        <nav className='navBar'>
          <p className='HeaderText'><a href='#'><b>Home</b></a></p>
          <p className='HeaderText'><a href='#'>About</a></p>
          <p className='HeaderText'><a href='#'>Training</a></p>
        </nav>
      </header>

      <div className="mainContainer">
        <div className='mainTextContent'>
          <h1 className='h1TextContent'>WORKOUTS MADE <br/> <b className='boldColor'>EXCLUSIVE</b> FOR YOU!</h1>
          <p className='mainSubText'>We create <b>exclusive and unique workouts</b> for you. <br/> Invest in your body and <b>get much more performance</b><br/> and quality of life.</p>
          <button className='mainButton'> 
            <img src="whatsapp.svg"/>
            <p className='buttonText'>Start now</p>
          </button>
        </div>
        <div className='imageContainer'>
          <img src="fitness-jump.svg"/>
        </div>
      </div>
      <footer className="footerText">
        send us a message <b> @treine.me</b>

      </footer>
      <div className='balls'>
          <img src='balls-decoration.svg'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
