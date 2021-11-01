import React from 'react';
import styles from './dropdown-counter.module.scss';

type DropdownCounterProps = {
  text: string;
  number: number;
  onChange: (counter: number, type: string) => void;
  type: string;
};

type DropdownCounterState = {
  text: string;
  counter: number;
  onChange: (counter: number, type: string) => void;
  type: string;
}

class DropdownCounter extends React.Component<
  DropdownCounterProps,
  DropdownCounterState
> {
  constructor(props: DropdownCounterProps) {
    super(props);
    this.state = {
      text: props.text,
      counter: props.number,
      onChange: props.onChange,
      type: props.type,
    };
    this.handleClickMinus = this.handleClickMinus.bind(this);
    this.handleClickPlus = this.handleClickPlus.bind(this);
  }

  private handleClickMinus() {
    const { counter, type, onChange } = this.state;
    if (counter > 0) {
      this.setState({ counter: counter - 1 });
      onChange(counter - 1, type);
    }
  }

  private handleClickPlus() {
    const { counter, type, onChange } = this.state;
    this.setState({ counter: counter + 1 });
    onChange(counter + 1, type);
  }

  render(): JSX.Element {
    const { counter, text } = this.state;
    let isMinusDark = false;
    if (counter > 0) {
      isMinusDark = true;
    }
    return (
      <div className={styles['dropdown-counter']}>
        <div className={styles['dropdown-counter__header']}>{text}</div>
        <div className={styles['dropdown-counter__container']}>
          <button
            className={
              isMinusDark
                ? styles['container-dropdown__decrease_dark']
                : styles['container-dropdown__decrease']
            }
            onClick={this.handleClickMinus}
            onKeyDown={this.handleClickMinus}
            type='button'
          >
            -
          </button>
          <div className={styles['container-dropdown__value']}>{counter}</div>
          <button
            className={styles['container-dropdown__increase']}
            onClick={this.handleClickPlus}
            onKeyDown={this.handleClickPlus}
            type = 'button'
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default DropdownCounter;
