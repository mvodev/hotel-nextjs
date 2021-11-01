import React from 'react';
import DropdownCounter from '../dropdown-counter/DropdownCounter';
import Button from '../button/button';
import styles from './dropdown.module.scss';
import Utils from '../../utils/Utils';

type DropdownGuestsState = {
  value: {
    adult: number;
    child: number;
    infants: number;
  };
  total: string;
  placeholder: string;
  opened: boolean;
}

type DropdownGuestsProps = {
  placeholder: string;
  opened: boolean;
  value: {
    adult: number;
    child: number;
    infants: number;
  };
}

class DropdownGuests extends React.Component<
  DropdownGuestsProps,
  DropdownGuestsState
> {
  private spellCases = {
    guests: ['гость', 'гостя', 'гостей'],
    infants: ['младенец', 'младенца', 'младенцев'],
  };

  private dropdownOpenedStyle = {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    border: '1px solid rgba(31, 32, 65, 0.5)',
  };

  private dropdownBodyOpenedStyle = { display: 'block' };

  private dropdownBodyClosedStyle = { display: 'none' };

  constructor(props: DropdownGuestsProps) {
    super(props);
    this.state = {
      value: {
        adult: props.value.adult,
        infants: props.value.infants,
        child: props.value.child,
      },
      placeholder: props.placeholder,
      opened: props.opened,
      total: '',
    };
    this.bindEvents();
  }

  private handleApplyButton() {
    this.setState({ total: this.getValueForInputField() });
  }

  private handleClearButton() {
    this.setState({ 
      total: '',
      value: {
        adult: 0,
        infants: 0,
        child: 0,
      }

    });
  }

  private handleDropdownClick() {
    const { opened } = this.state;
    this.setState({ opened: !opened });
  }

  private onChange(data: number, type: string): void {
    const { value } = this.state;
    const { adult, child, infants } = value;
    if (type === 'adult') {
      this.setState({ value: { adult: data, child, infants } });
    } else if (type === 'child') {
      this.setState({ value: { adult, child: data, infants } });
    } else {
      this.setState({ value: { adult, child, infants: data } });
    }
  }

  private getValueForInputField(): string {
    const { value } = this.state;
    const { adult, child, infants } = value;
    let result = '';
    const total = adult + child;
    result = `${total} ${
      this.spellCases.guests[Utils.getPosInSpellCasesArray(total)]
    }`;
    if (infants > 0) {
      result += `,  ${infants} ${
        this.spellCases.infants[Utils.getPosInSpellCasesArray(infants)]
      }`;
    }
    if (total === 0) {
      result = '';
    }
    return result;
  }

  private bindEvents() {
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleApplyButton = this.handleApplyButton.bind(this);
    this.handleClearButton = this.handleClearButton.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render(): JSX.Element {
    const { opened, placeholder, total } = this.state;
    const { value } = this.state;
    const { child, adult, infants } = value;
    const showClearButton = total.length > 0;
    return (
      <div
        className={styles['dropdown-guests']}
        style={opened ? this.dropdownOpenedStyle : {}}
      >
        <div
          className={styles['dropdown-guests__input-wrapper']}
          onClick={this.handleDropdownClick}
          onKeyDown={this.handleDropdownClick}
          role='textbox'
          tabIndex={0}
        >
          <input
            type='text'
            readOnly
            className={styles['dropdown-guests__input']}
            placeholder={placeholder}
            value={total}
          />
          <div className={styles['dropdown-guests__arrow']}>
            keyboard_arrow_down
          </div>
        </div>
        <div
          className={styles['dropdown-guests__body']}
          style={
            opened ? this.dropdownBodyOpenedStyle : this.dropdownBodyClosedStyle
          }
        >
          <DropdownCounter
            text='Взрослые'
            number={adult}
            onChange={this.onChange}
            type='adult'
          />
          <DropdownCounter
            text='Дети'
            number={child}
            onChange={this.onChange}
            type='child'
          />
          <DropdownCounter
            text='Младенцы'
            number={infants}
            onChange={this.onChange}
            type='infants'
          />
          <div className={styles['dropdown-guests__body-buttons']}>
            <div
              style={
                showClearButton ? {} : { visibility: 'hidden', cursor: 'none' }
              }
            >
              <Button text='очистить' onClick={this.handleClearButton} />
            </div>
            <Button text='применить' onClick={this.handleApplyButton} />
          </div>
        </div>
      </div>
    );
  }
}

export default DropdownGuests;
