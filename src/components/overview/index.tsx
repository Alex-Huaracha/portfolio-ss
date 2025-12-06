import { GlobeIcon, MapPinIcon, MarsIcon, VenusIcon } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Item, ItemContent, ItemIcon, ItemLink } from './item';
import { CurrentLocalTimeItem } from './current-local-time-item';

export function Overview() {
  return (
    <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
      <Item>
        {/* Address */}
        <ItemIcon>
          <MapPinIcon />
        </ItemIcon>
        <ItemContent>
          <ItemLink
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              profileData.address
            )}`}
            aria-label={`Location: ${profileData.address}`}
          >
            {profileData.address}
          </ItemLink>
        </ItemContent>
      </Item>
      <CurrentLocalTimeItem timeZone={profileData.timeZone} />
    </div>
  );
}
