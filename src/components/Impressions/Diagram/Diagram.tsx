import { PieChart } from 'react-minimal-pie-chart';
import DiagramSegment from '../Types';

const Diagram = ({ segments }: { segments: DiagramSegment[] }): JSX.Element => {
  const colors = segments.map((segment, index) =>
    segment.withGradient ? (
      <defs key={segment.description}>
        <linearGradient id={`gradient${index}`}>
          <stop offset="0%" stopColor={`${segment.color}`} />
          <stop offset="100%" stopColor={`${segment.stopColor}`} />
        </linearGradient>
      </defs>
    ) : null
  );

  const valueWithGradient = segments.map((segment, index) =>
    segment.withGradient
      ? {
          value: segment.value,
          color: `url(#gradient${index})`,
          key: segment.description,
        }
      : segment
  );

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
