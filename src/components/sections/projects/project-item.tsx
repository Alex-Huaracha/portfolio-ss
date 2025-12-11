import * as Collapsible from '@radix-ui/react-collapsible';
import type { Project } from '../../../types/projects';
import { BoxIcon, InfinityIcon, LinkIcon } from 'lucide-react';
import { CollapsibleTrigger } from '../../ui/collapsible';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  const { start, end } = project.period;
  const isOngoing = !end;
  const isSinglePeriod = end === start;

  return (
    <Collapsible.Root defaultOpen={project.isExpanded} asChild>
      <div className={className}>
        <div className="flex items-center hover:bg-accent2">
          {project.logo ? (
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="mx-4 flex size-6 shrink-0 select-none"
              aria-hidden="true"
            />
          ) : (
            <div
              className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
              aria-hidden="true"
            >
              <BoxIcon className="size-4" />
            </div>
          )}

          <div className="flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 pr-2 text-left">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {project.title}
                </h3>

                <dl className="text-sm text-muted-foreground">
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    {!isSinglePeriod && (
                      <>
                        <span className="font-mono">—</span>
                        {isOngoing ? (
                          <>
                            <InfinityIcon
                              className="size-4.5 translate-y-[0.5px]"
                              aria-hidden
                            />
                            <span className="sr-only">Present</span>
                          </>
                        ) : (
                          <span>{end}</span>
                        )}
                      </>
                    )}
                  </dd>
                </dl>
              </div>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                  >
                    <LinkIcon className="pointer-events-none size-4" />
                    <span className="sr-only">Open Project Link</span>
                  </a>
                </TooltipTrigger>

                <TooltipContent>
                  <p>Open Project Link</p>
                </TooltipContent>
              </Tooltip>
            </CollapsibleTrigger>
          </div>
        </div>
      </div>
    </Collapsible.Root>
  );
}
