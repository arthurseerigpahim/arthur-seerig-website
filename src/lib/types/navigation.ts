export interface NavigationItem {
  title: string;
  href?: string;
  items?: {
    title: string;
    href: string;
  }[];
}

export interface NavigationSubItem {
  title: string;
  href: string;
}