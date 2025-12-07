import { GlobeIcon, MapPinIcon, MarsIcon } from 'lucide-react';
import { PROFILE } from '../../../data/profile';
import { Item, ItemContent, ItemIcon, ItemLink } from './item';
import { CurrentLocalTimeItem } from './current-local-time-item';
import { PhoneItem } from './phone-item';
import { EmailItem } from './email-item';
import { urlToName } from '../../../utils/url';
import { Panel, PanelContent } from '../../layout/panel';
import { JobItem } from './job-item';

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2.5">
        {PROFILE.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}
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
          {/* Website */}
          <Item>
            <ItemIcon>
              <GlobeIcon />
            </ItemIcon>
            <ItemContent>
              <ItemLink
                href={PROFILE.website}
                aria-label={`Personal website: ${urlToName(PROFILE.website)}`}
              >
                {urlToName(PROFILE.website)}
              </ItemLink>
            </ItemContent>
          </Item>
          {/* Me */}
          <Item>
            <ItemIcon>
              <MarsIcon />
            </ItemIcon>
            <ItemContent aria-label={`Pronouns: ${PROFILE.pronouns}`}>
              {PROFILE.pronouns}
            </ItemContent>
          </Item>
        </div>
      </PanelContent>
    </Panel>
  );
}
