import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Success from './pages/Success';
import PromoGame from './pages/PromoGame';
import SuccessUpsell from './pages/SuccessUpsell';
import SecondLanding from './pages/SecondLanding';
import SuccessBundle from './pages/SuccessBundle';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maz" element={<SecondLanding />} />
        <Route path="/regulamin" element={<Terms />} />
        <Route path="/polityka-prywatnosci" element={<Privacy />} />
        <Route path="/sukces-pobieranie-x9a4b2c8d7e6f5" element={<Success />} />
        <Route path="/sukces-pobieranie-n6kbv6ho86ghff" element={<SuccessUpsell />} />
        <Route path="/sukces-pobieranie-n4hf73bf73nd7d" element={<SuccessBundle />} />
        <Route path="/gra" element={<PromoGame />} />
      </Routes>
    </div>
  );
}
