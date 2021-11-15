import ImpressionsProps from './Types';

const impressionsDefaultProps: ImpressionsProps = {
  header: 'Впечатления от номера',
  value: [
    {
      title: 'perfect',
      value: 130,
      color: '#FFE39C',
      description: 'Великолепно',
      withGradient: true,
      stopColor: '#FFBA9C'
    },
    { title: 'good',
      value: 65,
      color: '#6FCF97',
      description: 'Хорошо',
      withGradient:true,
      stopColor:'#66D2EA',
    },
    {
      title: 'satisfactory',
      value: 65,
      color: '#BC9CFF',
      description: 'Удовлетворительно',
      withGradient:true,
      stopColor:'#8BA4F9',
    },
    { title: 'poor', value: 0, color: '#919191', description: 'Разочарован' },
  ],
};
export default impressionsDefaultProps;
