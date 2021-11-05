type NavbarProps = {
  items?: NavbarListItem[];
  user?: string;
  navbarIsOpened?: boolean;
};

type NavbarListItem = {
  id: number;
  item: string;
  link: string;
  hiddenItems?: NavbarListItem[];
};

export type { NavbarProps, NavbarListItem };
