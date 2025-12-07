import { ProfileHeader } from './components/profile-header';
import { Overview } from './components/overview';
import { cn } from './lib/utils';
import { ProfileCover } from './components/profile-cover';
import { SocialLinks } from './components/social-links';

export default function App() {
  return (
    <main className="max-w-screen overflow-x-hidden px-2">
      <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
        <ProfileCover />
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
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
