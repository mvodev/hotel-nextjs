import type { ReactElement } from 'react';
import BulletList from '../components/BulletList/BulletList';

const rules = {
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

const cancellation = {
  title: 'Отмена',
  items: [
    {
      id: 1,
      text:
        'Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за ' +
        '5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.',
    },
  ],
};

const bulletListComponent = (): ReactElement => (
  <div
    style={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        width: '250px',
        padding: '40px',
        boxSizing: 'content-box',
        flex: 'none',
      }}
    >
      <BulletList {...rules} />
    </div>
    <div style={{ width: '340px', padding: '40px', boxSizing: 'content-box' }}>
      <BulletList {...cancellation} />
    </div>
  </div>
);

export default bulletListComponent;
