import logo from './logo.svg';
import './App.css';
import NavBar from './layout/navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LandingPage from './pages/LandingPage';

import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from './pages/home';
function App() {
  const authToken = localStorage.getItem('authToken')
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route exact path="/home" element={<Home />} /> */}
          <Route
            path="/home"
            element={
             <ProtectedRoute>
                <Home/>
                </ProtectedRoute>
            }
          />

          {/* <Route
            path="/"
            element={
              authToken? <Navigate to="/home" /> : <LandingPage /> }
            /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
