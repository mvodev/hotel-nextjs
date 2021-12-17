type DiagramSegment = {
  type: 'perfect' | 'good' | 'satisfactory' | 'poor';
  value: number;
  color: string;
  description: string;
  withGradient?: boolean;
  stopColor?: string;
};

export default DiagramSegment;
