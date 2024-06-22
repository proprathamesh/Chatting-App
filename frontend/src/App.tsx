
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Router>
  )
}

export default App
