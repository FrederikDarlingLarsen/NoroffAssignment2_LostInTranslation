import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx';
import Main from './Components/Main.jsx';
import HeaderProfile from './Components/HeaderProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <HeaderProfile/>
      </header>
      
    
      <Main/>
        {/* <img src="https://vignette.wikia.nocookie.net/objectadversity/images/0/04/Awesome_Face_Pose_6_2017.png/revision/latest?cb=20170802141654" className="App-logo" alt="logo" /> */}
       
     
     <br/>
    </div>
  );
}

export default App;
