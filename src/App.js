import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
