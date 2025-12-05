import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EmbersBackground from './components/EmbersBackground';
import Sidebar from './components/Sidebar';

const About = () => <div className="text-white">About Section</div>;
const Experience = () => <div className="text-white">Experience Section</div>;
const Projects = () => <div className="text-white">Projects Section</div>;

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans selection:bg-red-500/30">
        <EmbersBackground />

        <div className="relative z-10 flex h-full p-30 gap-6">
          <div className="flex items-center">
            <Sidebar />
          </div>

          <main className="flex-1 rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-xs flex items-center justify-center relative overflow-hidden">
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
