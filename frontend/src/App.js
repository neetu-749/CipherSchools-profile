import './App.css';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar.jsx';
import Profile from './components/Profile';
import InfoHeader from './components/InfoHeader';




function App() {
  return (
    <div className="App" style={{background:'#f8f8ff'}}>
      <NavBar />
      <InfoHeader />
      <div class='parent'>
        <div class='child'><Profile /></div>
        <div class='childd'><SideBar /></div>
      </div>
    </div>
  );
}

export default App;
