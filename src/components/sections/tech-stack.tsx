import { TECH_STACK } from '../../data/tech-stack';
import { cn } from '../../lib/utils';
import { Panel, PanelContent, PanelHeader, PanelTitle } from '../layout/panel';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>
      <PanelContent
        className={cn(
          '[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5',
          'bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center',
          'bg-zinc-950/0.75 dark:bg-white/0.75'
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={tech.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={tech.title}
                    >
                      {tech.theme ? (
                        <>
                          {/* Icon for Light Mode (visible in light, hidden in dark) */}
                          <img
                            src={`/tech-stack/${tech.key}_light.svg`}
                            alt={`${tech.title} light icon`}
                            className="size-8 block dark:hidden"
                          />
                          {/* Icon for Dark Mode (hidden in light, visible in dark) */}
                          <img
                            src={`/tech-stack/${tech.key}_dark.svg`}
                            alt={`${tech.title} dark icon`}
                            className="size-8 hidden dark:block"
                          />
                        </>
                      ) : (
                        /* CASO B: Icono normal (Ej: React, Python) */
                        <img
                          src={`/tech-stack/${tech.key}.svg`}
                          alt={`${tech.title} icon`}
                          className="size-8"
                        />
                      )}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.title}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
