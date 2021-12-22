import style from './Dropdown.module.sass';

const Dropdown = ({
  sign = 'click me',
  childs = [],
  isOpen = false,
  toggleOpenStatus = () => {},
}: {
  sign?: string;
  childs?: JSX.Element[];
  isOpen?: boolean;
  toggleOpenStatus?: () => void;
}): JSX.Element => (
  <div
    className={[style.dropdown, isOpen ? style.dropdownPressed : ''].join(' ')}
  >
    <button type="button" className={style.button} onClick={toggleOpenStatus}>
      <span className={style.sign}>{sign}</span>
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style.icon}
      >
        <path
          d="M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z"
          fill="#1F2041"
          fillOpacity="0.5"
          className={style.iconPath}
        />
      </svg>
    </button>
    <ul className={style.list}>
      {childs.map((c) => (
        <li className={style.item} key={c.key}>
          {c}
        </li>
      ))}
    </ul>
  </div>
);

export default Dropdown;
