import { GlobeIcon, MapPinIcon, MarsIcon, VenusIcon } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Item, ItemContent, ItemIcon, ItemLink } from './item';
import { CurrentLocalTimeItem } from './current-local-time-item';
import { PhoneItem } from './PhoneItem';

export function Overview() {
  return (
    <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
      {/* Address */}
      <Item>
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
      {/* Current Time */}
      <CurrentLocalTimeItem timeZone={profileData.timeZone} />
      {/* Phone */}
      <PhoneItem phoneNumber={profileData.phoneNumber} />
    </div>
  );
}
