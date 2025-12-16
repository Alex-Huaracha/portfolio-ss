import { cn } from '../../../lib/utils';
import { ThemeToggle } from '../../ui/theme-toggle';
import { SiteHeaderMark } from './site-header-mark';
import { SiteHeaderWrapper } from './site-header-wrapper';

export function SiteHeader() {
  return (
    <SiteHeaderWrapper
      className={cn(
        'sticky top-0 z-50 max-w-screen overflow-x-hidden px-2 bg-background pt-2',
        'data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]',
        'not-dark:data-[affix=true]:**:data-header-container:after:bg-border',
        'transition-shadow duration-300'
      )}
    >
      <div
        className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl"
        data-header-container
      >
        <a
          href="/"
          aria-label="Home"
          className="has-data-[visible=false]:pointer-events-none [&_svg]:h-8"
        >
          <SiteHeaderMark />
        </a>
        <div className="flex-1" />
        <div className="flex items-center *:first:mr-2">
          <span className="mx-2 flex h-4 w-px bg-border" />

          <ThemeToggle />
        </div>
      </div>
    </SiteHeaderWrapper>
  );
}
