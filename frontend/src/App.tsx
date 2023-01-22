import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import UserDashboard from './Pages/UserDashboard';
import SimulatorDashboard from './Pages/SimulatorDashboard';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserDashboard />} />
        <Route path='/driver' element={<SimulatorDashboard />} />
        <Route path='*' element={<div>404 Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
