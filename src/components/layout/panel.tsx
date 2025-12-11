import type React from 'react';
import { cn } from '../../lib/utils';

function Panel({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section
      className={cn(
        'screen-line-before screen-line-after border-x border-edge',
        className
      )}
      {...props}
    />
  );
}

function PanelHeader({ className, ...props }: React.ComponentProps<'header'>) {
  return (
    <header className={cn('screen-line-after px-4', className)} {...props} />
  );
}

function PanelTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return <h2 className={cn('text-3xl font-semibold', className)} {...props} />;
}

function PanelTitleSup({ className, ...props }: React.ComponentProps<'sup'>) {
  return (
    <sup
      className={cn(
        '-top-[0.75em] ml-1 text-sm font-medium text-muted-foreground select-none',
        className
      )}
      {...props}
    />
  );
}

function PanelContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('p-4', className)} {...props} />;
}

export { Panel, PanelContent, PanelHeader, PanelTitle, PanelTitleSup };
