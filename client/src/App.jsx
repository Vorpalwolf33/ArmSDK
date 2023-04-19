import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import ErrorPage from './pages/Error';
import AuthPage from './pages/Auth';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={
            <AuthPage />
          } /> */}
          <Route exact path="/" element={
            <LandingPage />
          }/>
          <Route path="*" element={
            <ErrorPage />
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
