type BulletListProps = {
  title: string;
  items: BulletItem[];
};

type BulletItem = {
  id: number;
  text: string;
};

export default BulletListProps;
