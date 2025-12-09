import { CodeXmlIcon } from 'lucide-react';

import { Item, ItemContent, ItemIcon } from './item';

type JobItemProps = {
  title: string;
  company: string;
  website: string;
};

export function JobItem({ title }: JobItemProps) {
  return (
    <Item>
      <ItemIcon>
        <CodeXmlIcon />
      </ItemIcon>

      <ItemContent>
        {title}
        {/* {title} @
        <ItemLink
          className="ml-0.5 font-medium"
          href={website}
          aria-label={`${company} website`}
        >
          {company}
        </ItemLink> */}
      </ItemContent>
    </Item>
  );
}
