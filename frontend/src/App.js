import './App.css';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import InfoHeader from './components/InfoHeader';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <SideBar /> */}
      <InfoHeader />
      <Profile />
    </div>
  );
}

export default App;
