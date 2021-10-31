import Utils from "../../utils/Utils";
import DropdownCounter, {
  IDropdownCounterProps,
} from '../dropdown-counter/DropdownCounter';
import Button from '../button/button';
import styles from './dropdown.module.scss';

interface IDropdownGuestsState {
  value: {
    adult: number;
    child: number;
    infants: number;
  };
  total: string;
  placeholder: string;
  opened: boolean;
  clearButtonMustBeShown: boolean;
}

interface IDropdownGuestsProps {
  placeholder: string;
  opened: boolean;
  value: {
    adult: number;
    child: number;
    infants: number;
  };
}

class DropdownGuests extends React.Component<
  IDropdownGuestsProps,
  IDropdownGuestsState
> {
  private spellCases = {
    guests: ['гость', 'гостя', 'гостей'],
    infants: ['младенец', 'младенца', 'младенцев'],
  };

  private dropdownOpenedStyle = {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    border: '1px solid rgba(31, 32, 65, 0.75)',
  };

  private dropdownBodyOpenedStyle = { display: 'block' };

  private dropdownBodyClosedStyle = { display: 'none' };

  constructor(props: IDropdownGuestsProps) {
    super(props);
    this.state = {
      value: {
        adult: props.value.adult,
        infants: props.value.infants,
        child: props.value.child,
      },
      placeholder: props.placeholder,
      opened: props.opened,
      clearButtonMustBeShown: false,
      total: '',
    };
    this.bindEvents();
  }

  private bindEvents() {
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleApplyButton = this.handleApplyButton.bind(this);
    this.handleClearButton = this.handleClearButton.bind(this);
    this.onChangeInfant = this.onChangeInfant.bind(this);
    this.onChangeChild = this.onChangeChild.bind(this);
    this.onChangeAdult = this.onChangeAdult.bind(this);
  }

  private onChangeAdult(data: number): void {
    const child = this.state.value.child;
    const infants = this.state.value.infants;
    this.setState({ value: { adult: data, child, infants } });
  }

  private onChangeInfant(data: number): void {
    const adult = this.state.value.adult;
    const child = this.state.value.child;
    this.setState({ value: { adult, child, infants: data } });
  }

  private onChangeChild(data: number): void {
    const adult = this.state.value.adult;
    const infants = this.state.value.infants;
    this.setState({ value: { adult, child: data, infants } });
  }

  private handleApplyButton() {
    this.setState({ total: this.getValueForInputField() });
  }

  private handleClearButton() {
    this.setState({ total: '' });
  }

  private getValueForInputField(): string {
    let result = '';
    let total = this.state.value.adult + this.state.value.child;
    result =
      total + ' ' + this.spellCases.guests[Utils.getPosInSpellCasesArray(total)];
    if (this.state.value.infants > 0) {
      result +=
        ',  ' +
        this.state.value.infants +
        ' ' +
        this.spellCases.infants[
          Utils.getPosInSpellCasesArray(this.state.value.infants)
        ];
    }
    if (total === 0) {
      result = '';
    }
    return result;
  }

  private handleDropdownClick() {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    const showClearButton = this.state.total.length > 0 ? true : false;
    const isDropdownOpen = this.state.opened;
    return (
      <div
        className={styles['dropdown-guests']}
        style={isDropdownOpen ? this.dropdownOpenedStyle : {}}
      >
        <div
          className={styles['dropdown-guests__input-wrapper']}
          onClick={this.handleDropdownClick}
        >
          <input
            type="text"
            readOnly
            className={styles['dropdown-guests__input']}
            placeholder={this.state.placeholder}
            value={this.state.total}
          />
          <div className={styles['dropdown-guests__arrow']}>
            keyboard_arrow_down
          </div>
        </div>
        <div
          className={styles['dropdown-guests__body']}
          style={
            this.state.opened
              ? this.dropdownBodyOpenedStyle
              : this.dropdownBodyClosedStyle
          }
        >
          <DropdownCounter
            text={'Взрослые'}
            number={this.state.value.adult}
            onChange={this.onChangeAdult}
          ></DropdownCounter>
          <DropdownCounter
            text={'Дети'}
            number={this.state.value.child}
            onChange={this.onChangeChild}
          ></DropdownCounter>
          <DropdownCounter
            text={'Младенцы'}
            number={this.state.value.infants}
            onChange={this.onChangeInfant}
          ></DropdownCounter>
          <div className={styles['dropdown-guests__body-buttons']}>
            <div
              style={
                showClearButton ? {} : { visibility: 'hidden', cursor: 'none' }
              }
            >
              <Button
                text={'очистить'}
                onClick={this.handleClearButton}
              ></Button>
            </div>
            <Button
              text={'применить'}
              onClick={this.handleApplyButton}
            ></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default DropdownGuests;