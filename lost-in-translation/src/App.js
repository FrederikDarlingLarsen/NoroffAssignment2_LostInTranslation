import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Header from './Components/Header.jsx';
import HeaderProfile from './Components/HeaderProfile';

import StartUp from './Components/StartUp';
import Translation from './Components/Translation';
import Profile from './Components/Profile';
import { useUser } from './context/UserContext';

function App() {

const{user} = useUser()



  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Header/>
      {user !== null && < HeaderProfile username={user.username}/> }
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
