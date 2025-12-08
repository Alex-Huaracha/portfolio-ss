import { User, GraduationCap, Code } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface NavButtonProps {
  Icon: React.ElementType;
  to: string;
  label: string;
}

const NavButton = ({ Icon, to, label }: NavButtonProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        relative p-3 rounded-full transition-all duration-200
        ${
          isActive
            ? 'bg-white/20 text-white'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }
      `}
      aria-label={label}
    >
      {({ isActive }) => (
        <>
          <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />

          {!isActive && (
            <span className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/10 transition-colors" />
          )}
        </>
      )}
    </NavLink>
  );
};

export default function Sidebar() {
  return (
    <nav className="h-auto w-14 flex flex-col items-center py-4 bg-[#2a2a2a] rounded-full shadow-lg gap-4">
      {/* Navigation buttons */}
      <NavButton to="/about" label="About" Icon={User} />
      <NavButton to="/experience" label="Experience" Icon={GraduationCap} />

      <NavButton to="/projects" label="Projects" Icon={Code} />
    </nav>
  );
}
