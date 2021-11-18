type ExpandableListProps = {
  title: string;
  elements: Element[];
};

type Element = {
  id: number;
  element: React.ReactElement;
};

export default ExpandableListProps;
