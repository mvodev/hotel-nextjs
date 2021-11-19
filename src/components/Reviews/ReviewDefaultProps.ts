import type { ReviewsType } from './Types';

const ReviewDefaultProps: ReviewsType = {
  title: 'Отзывы посетителей номера',
  reviews: [
    {
      id: 1,
      avatar: '/images/avatar-user-1.webp',
      userName: 'Мурад Сарафанов',
      publicationDate: new Date(2021, 10, 9),
      text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
      likesNumber: 12,
      liked: true,
    },
    {
      id: 2,
      avatar: '/images/avatar-user-2.webp',
      userName: 'Патрисия Стёклышкова',
      publicationDate: new Date(2021, 10, 3),
      text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
      likesNumber: 2,
      liked: false,
    },
  ],
};

export default ReviewDefaultProps;
