const HeaderDefaultProps = {
  logo: '/images/logo.svg',
  user: undefined,
  navbarItems: [
    { id: 1, item: 'О нас', link: '/' },
    {
      id: 2,
      item: 'Услуги',
      link: '/',
      hiddenItems: [
        { id: 6, item: 'Обслуживание номеров', link: '/' },
        { id: 7, item: 'Парковка', link: '/' },
        { id: 8, item: 'Персональный сейф', link: '/' },
        { id: 9, item: 'Интернет', link: '/' },
        { id: 10, item: 'Кабельное телевидение', link: '/' },
        { id: 11, item: 'Питание', link: '/' },
      ],
    },
    { id: 3, item: 'Вакансии', link: '/' },
    { id: 4, item: 'Новости', link: '/' },
    {
      id: 5,
      item: 'Соглашения',
      link: '/',
      hiddenItems: [
        { id: 12, item: 'Правила проживания', link: '/' },
        { id: 13, item: 'Бонусная программа', link: '/' },
        { id: 14, item: 'Политика конфиденциальности', link: '/' },
      ],
    },
  ],
};

export default HeaderDefaultProps;
