import { cn } from '../../lib/utils';

function Prose({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="prose"
      className={cn(
        'prose max-w-none prose-zinc dark:prose-invert',
        'prose-headings:text-balance',
        'prose-a:font-medium prose-a:wrap-break-word prose-a:text-foreground prose-a:underline prose-a:underline-offset-4',
        'prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none',
        'prose-hr:border-edge',
        'prose-blockquote:border-s-border prose-blockquote:[&_p:first-of-type]:before:content-none prose-blockquote:[&_p:last-of-type]:after:content-none',
        className
      )}
      {...props}
    />
  );
}

function ProseMono({
  className,
  ...props
}: React.ComponentProps<typeof Prose>) {
  return (
    <Prose
      className={cn('prose-sm font-mono text-foreground', className)}
      {...props}
    />
  );
}

export { Prose, ProseMono };
