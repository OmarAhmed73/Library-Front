import './App.css';
import Header from './shared/Header'
import Footer from './shared/Footer'
import { Outlet } from 'react-router-dom';
import BackgroundImage from './assets/Background.jpg'

function App() {
  return (
  <div className='App' style={{backgroundImage:`url(${BackgroundImage})`, backgroundAttachment:'fixed', backgroundSize: 'cover'}}>
  <Header />
  <Outlet />
  <Footer />
  </div>
  );
}

export default App;
