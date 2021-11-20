type ExpandableListProps = {
  text: string;
  elements: Element[];
};

type Element = {
  id: number;
  element: React.ReactElement;
};

export default ExpandableListProps;
