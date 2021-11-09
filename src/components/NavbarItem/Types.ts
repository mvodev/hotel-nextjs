type NavbarItemProps = {
  item: NavbarItem;
};

type NavbarItem = {
  id: number;
  item: string;
  link: string;
  hiddenItems?: NavbarItem[];
};

export type { NavbarItemProps, NavbarItem };
