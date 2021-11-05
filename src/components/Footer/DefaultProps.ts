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

const getLinkProps = ({
  name,
  href = '/change me',
}: Pick<TypeLinkProps, 'name'> &
  Partial<Pick<TypeLinkProps, 'href'>>): TypeLinkProps => ({
  name,
  href,
  id: name,
});

const getLinkPropsFromOnlyName = (name: string): TypeLinkProps =>
  getLinkProps({ name });

const defaultLists: TypeListProps[] = [
  {
    title: 'навигация',
    links: ['о нас', 'новости', 'служба поддержки', 'услуги'].map(
      getLinkPropsFromOnlyName
    ),
    id: 'nav',
  },
  {
    title: 'о нас',
    links: ['о сервисе', 'наша команда', 'вакансии', 'инвесторы'].map(
      getLinkPropsFromOnlyName
    ),
    id: 'about',
  },
  {
    title: 'служба поддержки',
    links: ['соглашения', 'сообщества', 'связь с нами'].map(
      getLinkPropsFromOnlyName
    ),
    id: 'support',
  },
];

const defaultSocials: TypeSocialProps<TypeSocialSources>[] = [
  {
    id: 'twitter',
    href: 'https://twitter.com',
    src: './images/twitter-icon.svg',
  },
  {
    id: 'facebook',
    href: 'https://facebook.com',
    src: './images/facebook-icon.svg',
  },
  {
    id: 'instagram',
    href: 'https://instagram.com',
    src: './images/instagram-icon.svg',
  },
];

export { defaultLists, defaultSocials };
export type { TypeFooterProps, TypeListProps, TypeLinkProps };
