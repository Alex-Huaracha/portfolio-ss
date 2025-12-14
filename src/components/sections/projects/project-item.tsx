import type { Project } from '../../../types/projects';
import {
  BoxIcon,
  ChevronsDownUp,
  ChevronsUpDown,
  CodeXml,
  InfinityIcon,
  LinkIcon,
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../ui/collapsible';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';
import React from 'react';
import { ProseMono } from '../../ui/typography';
import { Markdown } from '../../markdown';
import { Tag } from '../../ui/tag';

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  const [open, setOpen] = React.useState(false);
  const { start, end } = project.period;
  const isOngoing = !end;
  const isSinglePeriod = end === start;

  return (
    <Collapsible
      defaultOpen={project.isExpanded}
      onOpenChange={setOpen}
      asChild
    >
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

              {project.link && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                    >
                      <LinkIcon className="pointer-events-none size-4" />
                      <span className="sr-only">View Live Project</span>
                    </a>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>View Live Project</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {project.repository && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                      href={project.repository}
                      target="_blank"
                      rel="noopener"
                    >
                      <CodeXml className="pointer-events-none size-4" />
                      <span className="sr-only">View Source Code</span>
                    </a>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>View Source Code</p>
                  </TooltipContent>
                </Tooltip>
              )}

              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                {open ? (
                  <ChevronsDownUp className="size-4  group-data-[state=open]:block" />
                ) : (
                  <ChevronsUpDown className="size-4 group-data-[state=open]:hidden" />
                )}
              </div>
            </CollapsibleTrigger>
          </div>
        </div>
        <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="border-t border-edge shadow-inner">
            <div className="space-y-4 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
              {project.description && (
                <ProseMono>
                  <Markdown>{project.description}</Markdown>
                </ProseMono>
              )}

              {project.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="flex">
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
