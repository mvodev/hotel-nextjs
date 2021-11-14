type ImpressionsProps = {
  header: string;
  value: Array<ImpressionsItem>;
};

type ImpressionsItem = {
  title: string;
  value: number;
  color: string;
  description: string;
};

export default ImpressionsProps;
