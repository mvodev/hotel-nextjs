import DiagramSegment from './Types';

const DiagramSettings: DiagramSegment[] = [
  {
    type: 'perfect',
    value: 0,
    color: '#FFE39C',
    description: 'Великолепно',
    withGradient: true,
    stopColor: '#FFBA9C',
  },
  {
    type: 'good',
    value: 0,
    color: '#6FCF97',
    description: 'Хорошо',
    withGradient: true,
    stopColor: '#66D2EA',
  },
  {
    type: 'satisfactory',
    value: 0,
    color: '#BC9CFF',
    description: 'Удовлетворительно',
    withGradient: true,
    stopColor: '#8BA4F9',
  },
  { type: 'poor', value: 0, color: '#919191', description: 'Разочарован' },
];

export default DiagramSettings;
