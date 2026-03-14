import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Success from './pages/Success';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regulamin" element={<Terms />} />
        <Route path="/polityka-prywatnosci" element={<Privacy />} />
        <Route path="/sukces-pobieranie-x9a4b2c8d7e6f5" element={<Success />} />
      </Routes>
    </div>
  );
}
