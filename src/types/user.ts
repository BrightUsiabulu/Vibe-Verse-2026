
export interface UserType {
  id: string;
  username: string;
  name: string;
  avatar: string;
  verified: boolean;
  followers: number;
  following: number;
  likes: number;
  qrCodeUrl?: string;
  shareLink?: string;
}

export interface PlatformLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface DeepLinkConfig {
  scheme: string;
  host: string;
  path: string;
  params?: Record<string, string>;
}
