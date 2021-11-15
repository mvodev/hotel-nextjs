type ImpressionsProps = {
  header: string;
  value: Array<ImpressionsItem>;
};

type ImpressionsItem = {
  title: string;
  value: number;
  color: string;
  description: string;
  withGradient?: boolean;
  stopColor?: string;
};

export default ImpressionsProps;
