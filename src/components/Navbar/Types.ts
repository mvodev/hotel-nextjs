type NavbarProps = {
  items?: NavbarListItem[];
  user?: string;
  isOpened?: boolean;
};

type NavbarListItem = {
  id: number;
  item: string;
  link: string;
  hiddenItems?: NavbarListItem[];
};

export type { NavbarProps, NavbarListItem };
