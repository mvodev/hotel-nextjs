import { PieChart } from 'react-minimal-pie-chart';

import ImpressionsProps from '../Types';

const Diagram = ({ value }: ImpressionsProps): JSX.Element => {
  const colors = value.map((elem, index) => {
    if (elem.withGradient) {
      return (
        <defs key={elem.description}>
          <linearGradient id={`gradient${index}`}>
            <stop offset='0%' stopColor={`${elem.color}`} />
            <stop offset='100%' stopColor={`${elem.stopColor}`} />
          </linearGradient>
        </defs>
      );
    }
    return null;
  });

  const valueWithGradient = value.map((elem, index) => {
    if (elem.withGradient) {
      return {
        value: elem.value,
        color: `url(#gradient${index})`,
        key: elem.description,
      };
    }
    return elem;
  });

  return (
    <PieChart
      lineWidth={6.7}
      paddingAngle={2}
      radius={60}
      startAngle={270}
      lengthAngle={-360}
      center={[60, 60]}
      viewBoxSize={[120, 120]}
      data={valueWithGradient}
    >
      {colors}
    </PieChart>
  );
};

export default Diagram;
