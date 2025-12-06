export type User = {
  firstName: string;
  lastName: string;
  displayName: string;
  gender: string;
  pronouns: string;
  flipSentences: string[];
  address: string;
  phoneNumber: string;
  email: string;
  /** Personal/homepage URL */
  website: string;
  /** Primary/current role shown on profile */
  jobTitle: string;
  /** Rich about section; supports Markdown */
  about: string;
  /** Public URL to avatar image */
  avatar: string;
  /** SEO keywords list for metadata */
  keywords: string[];
  /** Time zone in IANA format (e.g., "America/Lima") */
  timeZone: string;
  /** Profile/site start date in YYYY-MM-DD */
  dateCreated: string;
};
