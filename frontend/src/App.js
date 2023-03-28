import './App.css';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar.jsx';
import Profile from './components/Profile';
import InfoHeader from './components/InfoHeader';
import Leftbar from './components/LeftBar';




function App() {
  return (
    <div className="App" style={{background:'#f8f8ff'}}>
      <NavBar />
      <InfoHeader />
      <div class='parent'>
        <div class='childdd' ><Leftbar /></div>
        
        <div class='child' style={{width:'93%' }}>
          <Profile />
        
         <div class='childd' ><SideBar /></div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
