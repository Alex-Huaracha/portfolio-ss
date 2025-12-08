import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './button'; // shadcn button

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {/* Sun icon: visible only in light mode */}
      <Sun className="relative hidden after:absolute after:-inset-2 [html.light_&]:block" />

      {/* Moon icon: visible only in dark mode (absolute positioning to overlay) */}
      <Moon className="relative hidden after:absolute after:-inset-2 [html.dark_&]:block" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
