import { cn } from './lib/utils';
import { ProfileCover } from './components/sections/profile-cover';
import { ProfileHeader } from './components/sections/profile-header';
import { Overview } from './components/sections/overview';
import { SocialLinks } from './components/sections/social-links';
import { About } from './components/sections/about';
import { ThemeToggle } from './components/ui/theme-toggle';
import { TechStack } from './components/sections/tech-stack';
import { Experiences } from './components/sections/experiences';
import { Projects } from './components/sections/projects';
import { Brand } from './components/sections/brand';

export default function App() {
  return (
    <main className="max-w-screen overflow-x-hidden px-2">
      <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
        <ThemeToggle />
        <ProfileCover />
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <TechStack />
        <Separator />

        <Experiences />
        <Separator />

        <Projects />
        <Separator />

        <Brand />
        <Separator />
      </div>
    </main>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-8 w-full border-x border-edge',
        'before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]',
        'before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56',
        className
      )}
    />
  );
}
