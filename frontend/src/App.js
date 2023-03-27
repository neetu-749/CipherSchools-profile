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
      {/* <div class='parent'> */}
        <div class='child' style={{width:'80%', marginLeft: '5rem' }}><Profile /></div>
        <div class='childd' style={{width:'90%'}}><SideBar /></div>
      {/* </div> */}
      
    </div>
  );
}

export default App;
