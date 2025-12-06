import { GlobeIcon, MapPinIcon, MarsIcon, VenusIcon } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { Item, ItemContent, ItemIcon, ItemLink } from './item';
import { CurrentLocalTimeItem } from './current-local-time-item';
import { PhoneItem } from './PhoneItem';
import { EmailItem } from './email-item';

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
              PROFILE.address
            )}`}
            aria-label={`Location: ${PROFILE.address}`}
          >
            {PROFILE.address}
          </ItemLink>
        </ItemContent>
      </Item>
      {/* Current Time */}
      <CurrentLocalTimeItem timeZone={PROFILE.timeZone} />
      {/* Phone */}
      <PhoneItem phoneNumber={PROFILE.phoneNumber} />
      {/* Email */}
      <EmailItem email={PROFILE.email} />
    </div>
  );
}
