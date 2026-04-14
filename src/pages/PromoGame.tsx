import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, HeartCrack, Flower2, Gift, Play, RotateCcw, Trophy, ShoppingBag, Home, X, Copy, Check } from 'lucide-react';

type GameState = 'start' | 'playing' | 'won' | 'lost';

interface Rose {
  id: number;
  x: number;
  y: number;
  expiresAt: number;
  duration: number;
}

const Overlay = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 z-20"
  >
    {children}
  </motion.div>
);

const Button = ({ children, onClick, icon }: { children: React.ReactNode, onClick: () => void, icon?: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center w-full gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-rose-200 hover:shadow-xl hover:-translate-y-1 transition-all active:translate-y-0"
  >
    {icon}
    {children}
  </button>
);

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [roses, setRoses] = useState<Rose[]>([]);
  const [copied, setCopied] = useState(false);


  const scoreRef = useRef(score);
  const livesRef = useRef(lives);
  const rosesRef = useRef(roses);
  const gameStateRef = useRef(gameState);

  useEffect(() => { scoreRef.current = score; }, [score]);
  useEffect(() => { livesRef.current = lives; }, [lives]);
  useEffect(() => { rosesRef.current = roses; }, [roses]);
  useEffect(() => { gameStateRef.current = gameState; }, [gameState]);

   const handleCopyCode = () => {
    navigator.clipboard.writeText('ZONA10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const startGame = () => {
    setScore(0);
    setLives(3);
    setRoses([]);
    setGameState('playing');
  };

  useEffect(() => {
    if (gameState !== 'playing') return;

    let lastSpawn = Date.now();
    let animationFrameId: number;
    let isRunning = true;

    const loop = () => {
      if (!isRunning) return;
      const now = Date.now();

      // Check expirations
      const expiredRoses = rosesRef.current.filter(r => now > r.expiresAt);
      if (expiredRoses.length > 0) {
        setRoses(prev => prev.filter(r => now <= r.expiresAt));
        setLives(prev => {
          const newLives = prev - expiredRoses.length;
          if (newLives <= 0) {
            setGameState('lost');
          }
          return Math.max(0, newLives);
        });
      }

      // Spawn new rose
      const currentScore = scoreRef.current;
      const spawnInterval = Math.max(400, 1200 - currentScore * 35);
      if (now - lastSpawn > spawnInterval && gameStateRef.current === 'playing') {
        const duration = Math.max(800, 2000 - currentScore * 50);
        const newRose = {
          id: Math.random(),
          x: Math.random() * 70 + 15, // 15% to 85% to keep away from edges
          y: Math.random() * 70 + 15,
          expiresAt: now + duration,
          duration: duration
        };
        setRoses(prev => [...prev, newRose]);
        lastSpawn = now;
      }

      if (gameStateRef.current === 'playing') {
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameState]);

  const handleRoseClick = (id: number) => {
    if (gameState !== 'playing') return;
    
    // Ensure the rose hasn't already expired in the background
    if (!rosesRef.current.find(r => r.id === id)) return;

    setRoses(prev => prev.filter(r => r.id !== id));
    setScore(prev => {
      const newScore = prev + 1;
      if (newScore >= 20) {
        setGameState('won');
      }
      return newScore;
    });
  };

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md h-150 bg-white rounded-3xl shadow-2xl overflow-hidden relative border-4 border-rose-200 flex flex-col">
        
        {/* Header */}
        <div className="bg-rose-50 p-4 flex justify-between items-center border-b border-rose-100 z-10">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-rose-100">
            <Trophy className="w-5 h-5 text-rose-500" />
            <span className="font-bold text-rose-700 text-lg">{score} / 20</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 bg-white px-4 py-2 rounded-full shadow-sm border border-rose-100">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  className={`w-6 h-6 transition-colors duration-300 ${i < lives ? 'text-rose-500 fill-rose-500' : 'text-gray-200 fill-gray-100'}`}
                />
              ))}
            </div>
            <a 
              href="/" 
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm border border-rose-100 text-gray-400 hover:text-rose-500 hover:bg-rose-50 transition-colors"
              title="Powrót"
            >
              <X className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Game Area */}
        <div className="flex-1 relative bg-linear-to-b from-white to-rose-50 overflow-hidden">
          <AnimatePresence>
            {gameState === 'playing' && roses.map(rose => (
              <motion.button
                key={rose.id}
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute w-20 h-20 -ml-10 -mt-10 flex items-center justify-center cursor-pointer"
                style={{ left: `${rose.x}%`, top: `${rose.y}%` }}
                onClick={() => handleRoseClick(rose.id)}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Flower2 className="w-12 h-12 text-rose-500 drop-shadow-md z-10" />
                  
                  {/* Timer indicator ring */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="rgba(244, 63, 94, 0.15)"
                      strokeWidth="6"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="6"
                      strokeDasharray="289"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: 289 }}
                      transition={{ duration: rose.duration / 1000, ease: "linear" }}
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>

          {/* Overlays */}
          <AnimatePresence>
            {gameState === 'start' && (
              <Overlay>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center w-full"
                >
                  <div className="bg-rose-100 p-6 rounded-full mb-6">
                    <Flower2 className="w-16 h-16 text-rose-500" />
                  </div>
                  <h1 className="text-4xl font-black text-rose-800 mb-3 text-center tracking-tight">Zbierz róże</h1>
                  <p className="text-rose-600 text-center mb-8 px-4 text-lg leading-relaxed">
                    Złap <strong className="text-rose-700">20 róż</strong> zanim znikną, aby wygrać kod rabatowy! Masz 3 życia.
                  </p>
                  <div className="w-full max-w-xs">
                    <Button onClick={startGame} icon={<Play className="w-6 h-6" />}>
                      Rozpocznij
                    </Button>
                  </div>
                </motion.div>
              </Overlay>
            )}

            {gameState === 'won' && (
              <Overlay>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center w-full"
                >
                  <div className="bg-emerald-100 p-6 rounded-full mb-6">
                    <Gift className="w-16 h-16 text-emerald-500" />
                  </div>
                  <h2 className="text-4xl font-black text-emerald-600 mb-3 text-center tracking-tight">Wygrałaś!</h2>
                  <p className="text-gray-600 text-center mb-6 text-lg">
                    Gratulacje! Oto twój kod rabatowy:
                  </p>
                  <button 
                    onClick={handleCopyCode}
                    className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 mb-8 w-full max-w-xs text-center shadow-inner hover:bg-emerald-100 transition-colors relative group cursor-pointer"
                    title="Kliknij, aby skopiować"
                  >
                    <span className="block text-sm text-emerald-600 font-bold mb-2 tracking-widest">KOD RABATOWY</span>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl font-black text-emerald-700 tracking-wider">ZONA10</span>
                      {copied ? (
                        <Check className="w-6 h-6 text-emerald-600" />
                      ) : (
                        <Copy className="w-6 h-6 text-emerald-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {copied ? 'Skopiowano!' : 'Kliknij, aby skopiować'}
                    </span>
                  </button>
                  <div className="flex flex-col gap-3 w-full max-w-xs">
                    <a href="https://buy.stripe.com/aFa28tbocf2x3c442sbMQ03?prefilled_promo_code=ZONA10" className="flex items-center justify-center w-full gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-1 transition-all active:translate-y-0">
                      <ShoppingBag className="w-5 h-5" />
                      Kup "Żona, nie matka"
                    </a>
                    <a href="https://buy.stripe.com/dRm00lak89IddQI56wbMQ05?prefilled_promo_code=ZONA10" className="flex items-center justify-center w-full gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-1 transition-all active:translate-y-0">
                      <ShoppingBag className="w-5 h-5" />
                      Kup pakiet e-booków
                    </a>
                    <a href="/" className="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 font-medium mt-2 hover:underline">
                      <Home className="w-4 h-4" />
                      Powrót
                    </a>
                  </div>
                </motion.div>
              </Overlay>
            )}

            {gameState === 'lost' && (
              <Overlay>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center w-full"
                >
                  <div className="bg-rose-100 p-6 rounded-full mb-6">
                    <HeartCrack className="w-16 h-16 text-rose-500" />
                  </div>
                  <h2 className="text-4xl font-black text-rose-800 mb-3 text-center tracking-tight">Przegrałaś</h2>
                  <p className="text-rose-600 text-center mb-8 text-lg">
                    Koniec żyć. Spróbuj jeszcze raz.
                  </p>
                  <div className="flex flex-col gap-3 w-full max-w-xs">
                    <Button onClick={startGame} icon={<RotateCcw className="w-5 h-5" />}>
                      Spróbuj ponownie
                    </Button>
                    <a href="/" className="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 font-medium mt-2 hover:underline">
                      <Home className="w-4 h-4" />
                      Powrót
                    </a>
                  </div>
                </motion.div>
              </Overlay>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}