type TypeLinkProps = {
  name: string;
  href: string;
  id: string;
};

type TypeListProps = {
  title: string;
  links: TypeLinkProps[];
  id: string;
};

type TypeSocialSources = 'twitter' | 'facebook' | 'instagram';

type TypeSocialProps<T extends TypeSocialSources> = {
  id: T;
  href: string;
  src: `./images/${T}-icon.svg`;
};

type TypeFooterProps = {
  lists?: TypeListProps[];
  socials?: TypeSocialProps<TypeSocialSources>[];
};

export type {
  TypeFooterProps,
  TypeSocialProps,
  TypeSocialSources,
  TypeListProps,
  TypeLinkProps,
};
