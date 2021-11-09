import type { ReactElement } from 'react';
import BulletList from '../components/BulletList/BulletList';

const props = {
  title: 'Правила',
  items: [
    {
      id: 1,
      text: 'Нельзя с питомцами',
    },
    {
      id: 2,
      text: 'Без вечеринок и мероприятий',
    },
    {
      id: 3,
      text: 'Время прибытия - после 13:00, а выезд до 12:00',
    },
  ],
};

const bulletListComponent = (): ReactElement => <BulletList {...props} />;

export default bulletListComponent;
