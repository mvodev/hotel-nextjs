import ExpandableList from 'src/components/ExpandableList/ExpandableList';
import Button from 'src/components/Button/Button';

const props = {
  title: 'Expandable list',
  elements: [
    { id: 1, element: <Button /> },
    { id: 2, element: <Button /> },
    { id: 3, element: <Button /> },
    { id: 4, element: <Button /> },
    { id: 5, element: <Button /> },
    { id: 6, element: <Button /> },
    { id: 7, element: <Button /> },
    { id: 8, element: <Button /> },
  ],
};

const expandableList = (): React.ReactElement => (
  <div
    style={{
      padding: '50px',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}
  >
    <ExpandableList {...props} />
  </div>
);

export default expandableList;
