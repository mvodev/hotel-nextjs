import ImpressionsProps from './Types';

const impressionsDefaultProps: ImpressionsProps = {
  header: 'Впечатления от номера',
  value: [
    {
      title: 'perfect',
      value: 130,
      color: '#FFE39C',
      description: 'Великолепно',
    },
    { title: 'good', value: 65, color: '#6FCF97', description: 'Хорошо' },
    {
      title: 'satisfactory',
      value: 65,
      color: '#BC9CFF',
      description: 'Удовлетворительно',
    },
    { title: 'poor', value: 0, color: '#919191', description: 'Разочарован' },
  ],
};
export default impressionsDefaultProps;
