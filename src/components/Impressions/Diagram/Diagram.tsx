/* eslint-disable no-console */
import { PieChart } from 'react-minimal-pie-chart';

import ImpressionsProps from '../Types';

const Diagram = ({ value }: ImpressionsProps): JSX.Element => {

  const colors = value.map((elem,index) =>
    {if(elem.withGradient){
      return (
        <defs>
          <linearGradient id={`gradient${index}`}>
            <stop offset="0%" stopColor={`${elem.color}`} />
            <stop offset="100%" stopColor={`${elem.stopColor}`} />
          </linearGradient>
        </defs>)
    }
    return null;}
  );
  const dataForChart = value.slice(0);
  const dataWithGradient =  dataForChart.map((elem,index)=>{
    if(elem.withGradient){
      return {
        value: elem.value,
        color: `url(#gradient${index})`,
      }
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
      data={dataWithGradient}
    >
      {colors}
    </PieChart>
  );
};

export default Diagram;
