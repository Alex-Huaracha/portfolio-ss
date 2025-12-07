import { TZDate, tzOffset } from '@date-fns/tz';
import { format } from 'date-fns';
import {
  Clock1Icon,
  Clock2Icon,
  Clock3Icon,
  Clock4Icon,
  Clock5Icon,
  Clock6Icon,
  Clock7Icon,
  Clock8Icon,
  Clock9Icon,
  Clock10Icon,
  Clock11Icon,
  Clock12Icon,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Item, ItemContent, ItemIcon } from './item';

const CLOCK_ICONS: Record<number, LucideIcon> = {
  1: Clock1Icon,
  2: Clock2Icon,
  3: Clock3Icon,
  4: Clock4Icon,
  5: Clock5Icon,
  6: Clock6Icon,
  7: Clock7Icon,
  8: Clock8Icon,
  9: Clock9Icon,
  10: Clock10Icon,
  11: Clock11Icon,
  12: Clock12Icon,
};

type CurrentLocalTimeItemProps = {
  timeZone: string;
};

type TimeState = {
  timeString: string;
  diffText: string;
  ClockIcon: LucideIcon;
};

export function CurrentLocalTimeItem({ timeZone }: CurrentLocalTimeItemProps) {
  const [timeState, setTimeState] = useState<TimeState>({
    timeString: '',
    diffText: '',
    ClockIcon: Clock12Icon,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const targetTime = TZDate.tz(timeZone);

      // Format time
      const formattedTime = format(targetTime, 'HH:mm');

      // Get clock icon
      const hour = targetTime.getHours();
      const hourForIcon = hour % 12 || 12; // Simplificado
      const ClockIcon = CLOCK_ICONS[hourForIcon];

      // Calculate time difference
      const viewerOffset = -now.getTimezoneOffset();
      const targetOffset = tzOffset(timeZone, now);
      const diffHours = Math.abs(targetOffset - viewerOffset) / 60;

      const diffText =
        diffHours < 1
          ? ' // Same time as you'
          : `// ${Math.floor(diffHours)}h ${
              targetOffset > viewerOffset ? 'ahead' : 'behind'
            } of you`;

      setTimeState({ timeString: formattedTime, diffText, ClockIcon });
    };

    updateTime();
    const interval = setInterval(updateTime, 60_000); // Usa _ para legibilidad
    return () => clearInterval(interval);
  }, [timeZone]);

  if (!timeState.timeString) {
    return (
      <Item>
        <ItemIcon>
          <Clock12Icon />
        </ItemIcon>
        <ItemContent>00:00</ItemContent>
      </Item>
    );
  }

  const { timeString, diffText, ClockIcon } = timeState;

  return (
    <Item>
      <ItemIcon>
        <ClockIcon />
      </ItemIcon>
      <ItemContent aria-label={`Current local time: ${timeString}`}>
        <span>{timeString}</span>
        <span className="text-muted-foreground" aria-hidden="true">
          {diffText}
        </span>
      </ItemContent>
    </Item>
  );
}
