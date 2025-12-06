export function decodeEmail(email: string) {
  return atob(email);
}

export function decodePhoneNumber(phone: string) {
  return atob(phone);
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\s/g, '');
  return cleaned.replace(/^(\+51)(\d{3})(\d{3})(\d{3})$/, '$1 $2 $3 $4');
}
