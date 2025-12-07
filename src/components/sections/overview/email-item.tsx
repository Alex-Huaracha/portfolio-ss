import { useIsClient } from '../../../hooks/use-is-client';
import { decodeEmail } from '../../../utils/string';
import { Item, ItemContent, ItemIcon, ItemLink } from './item';
import { MailIcon } from 'lucide-react';

type EmailProps = {
  email: string;
};

export function EmailItem({ email }: EmailProps) {
  const isClient = useIsClient();
  const emailDecoded = decodeEmail(email);
  return (
    <Item>
      <ItemIcon>
        <MailIcon />
      </ItemIcon>
      <ItemContent>
        <ItemLink
          href={isClient ? `mailto:${emailDecoded}` : '#'}
          aria-label={
            isClient ? `Send email to ${emailDecoded}` : 'Email address'
          }
        >
          {isClient ? emailDecoded : '[Email protected]'}
        </ItemLink>
      </ItemContent>
    </Item>
  );
}
