import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Header from './Components/Header.jsx';
import HeaderProfile from './Components/HeaderProfile';

import StartUp from './Components/StartUp';
import Translation from './Components/Translation';
import Profile from './Components/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Header/>
      <HeaderProfile/>

      {/* <nav>
  <NavLink to="/">Go to login</NavLink>
  <br/>
  <NavLink to="/Translation">Go to translation</NavLink>
  <br/>
  <NavLink to="/Profile">Go profile</NavLink>
</nav> */}
      </header>
      


      <Routes>
        <Route path="/" element={<StartUp/>}/>
        <Route path="/Translation" element={<Translation/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
     
     <br/>
    </div>
    </BrowserRouter>
  );
}

export default App;
