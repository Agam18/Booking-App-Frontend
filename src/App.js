import { Router,Routes, Route } from 'react-router-dom';
import MakeBookings from './components/MakeBookings';
import ViewBookings from './components/ViewBookings';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (

    <div>
      <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/>   
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/make-bookings" element={<MakeBookings />} />
        <Route path="/view-bookings" element={<ViewBookings />} />
      </Routes>
      </Router>
      </div>
   
  );
}

export default App;
