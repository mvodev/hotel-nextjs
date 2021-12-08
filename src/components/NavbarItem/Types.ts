type NavbarItemProps = {
  item: NavbarItem;
};

type NavbarItem = {
  id: number;
  item: string;
  link: string;
  hiddenItems?: NavbarItem[];
  callback?: () => void;
};

export type { NavbarItemProps, NavbarItem };
