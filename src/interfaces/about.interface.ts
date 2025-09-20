export interface InfoItemData {
  label: string;
  value: string;
}

export interface SocialLinkData {
  name: string;
  url: string;
}

export interface AboutData {
  personalInfo: InfoItemData[];
  contactInfo: InfoItemData[];
  socialLinks: SocialLinkData[];
}
