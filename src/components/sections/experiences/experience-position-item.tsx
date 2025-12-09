import { cn } from '../../../lib/utils';
import type { ExperiencePosition } from '../../../types/experiences';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ExperienceIcon } from './experience-position-icon';
import { ChevronsDownUp, ChevronsUpDown } from 'lucide-react';
import React from 'react';
export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  const [open, setOpen] = React.useState(false);

  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;

  return (
    <Collapsible.Root defaultOpen={position.isExpanded} onOpenChange={setOpen}>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <Collapsible.Trigger
          className={cn(
            'block w-full text-left',
            'relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg hover:before:bg-accent2'
          )}
        >
          <div className="relative z-1 mb-1 flex items-center gap-3">
            <div
              className={cn(
                'flex size-6 shrink-0 items-center justify-center rounded-lg',
                'bg-muted text-muted-foreground',
                'border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background'
              )}
              aria-hidden
            >
              <ExperienceIcon className="size-4" icon={position.icon} />
            </div>
            <h4 className="flex-1 font-medium text-balance">
              {position.title}
            </h4>
            <div
              className="shrink-0 text-muted-foreground [&_svg]:size-4"
              aria-hidden
            >
              {/* ICONO 1: Visible por defecto. Se OCULTA (hidden) cuando está abierto */}
              <ChevronsUpDown className="size-4 group-data-[state=open]:hidden" />

              {/* ICONO 2: Oculto por defecto (hidden). Se MUESTRA (block) cuando está abierto */}
              <ChevronsDownUp className="size-4 hidden group-data-[state=open]:block" />

              <button className="inline-flex size-[25px] items-center justify-center rounded-full text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=closed]:bg-white data-[state=open]:bg-violet3">
                {open ? <ChevronsUpDown /> : <ChevronsDownUp />}
              </button>
            </div>
          </div>
        </Collapsible.Trigger>

        <Collapsible.Content />
      </div>
    </Collapsible.Root>
  );
}
