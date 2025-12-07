import { PhoneIcon } from 'lucide-react';
import { useIsClient } from '../../../hooks/use-is-client';
import { decodePhoneNumber, formatPhoneNumber } from '../../../utils/string';
import { Item, ItemContent, ItemIcon, ItemLink } from './item';

type PhoneItemProps = {
  phoneNumber: string;
};

export function PhoneItem({ phoneNumber }: PhoneItemProps) {
  const isClient = useIsClient();
  const phoneNumberDecoded = decodePhoneNumber(phoneNumber);

  return (
    <Item>
      <ItemIcon>
        <PhoneIcon />
      </ItemIcon>
      <ItemContent>
        <ItemLink
          href={isClient ? `tel:${phoneNumberDecoded}` : '#'}
          aria-label={
            isClient
              ? `Call ${formatPhoneNumber(phoneNumberDecoded)}`
              : 'Phone number'
          }
        >
          {isClient
            ? formatPhoneNumber(phoneNumberDecoded)
            : '[Phone protected]'}
        </ItemLink>
      </ItemContent>
    </Item>
  );
}
