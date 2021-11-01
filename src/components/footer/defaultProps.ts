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

type TypeFooterProps = {
  lists: TypeListProps[];
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

export { defaultLists };
export type { TypeFooterProps, TypeListProps, TypeLinkProps };
