import styles from './ContextMenu.module.sass';

const ContextMenu = ({
  childs,
}: {
  childs: JSX.Element[];
}): JSX.Element => (
  <ul className={styles.contextMenu}>
    {childs.map((c) => (
      <li key={c.key} className={styles.itemContainer}>
        {c}
      </li>
    ))}
  </ul>
);

export default ContextMenu;
