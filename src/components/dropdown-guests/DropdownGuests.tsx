import React from 'react';
import DropdownCounter, { IDropdownCounterProps } from '../dropdown-counter/DropdownCounter';

interface IDropdownGuestsState {
  value: {
    adult:number,
    child:number,
    infants:number,
  },
  total:string,
  placeholder:string,
  opened:boolean,
  clearButtonMustBeShown:boolean,
}

interface IDropdownGuestsProps{
  placeholder:string,
  opened:boolean,
  value: {
    adult: number,
    child: number,
    infants: number,
  },
}

class DropdownGuests extends React.Component<IDropdownGuestsProps, IDropdownGuestsState> {

  private spellCases = {
    guests: ["гость", "гостя", "гостей"],
    infants: ['младенец', 'младенца', 'младенцев'],
  };

  private dropdownClassName = 'dropdown dropdown_guests';

  constructor(props: IDropdownGuestsProps) {
    super(props);
    this.state = {
      value: {
        adult:props.value.adult,
        infants: props.value.infants,
        child: props.value.child,
      },
      placeholder:props.placeholder,
      opened:props.opened,
      clearButtonMustBeShown:false,
      total:'',
    };
    this.bindEvents();
  }

  private bindEvents(){
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleApplyButton = this.handleApplyButton.bind(this);
    this.handleClearButton = this.handleClearButton.bind(this)
    this.onChangeInfant = this.onChangeInfant.bind(this);
    this.onChangeChild = this.onChangeChild.bind(this);
    this.onChangeAdult = this.onChangeAdult.bind(this);
  }

  private onChangeAdult(data:number):void {
    const child = this.state.value.child;
    const infants = this.state.value.infants;
    this.setState( { value: { adult: data, child: child, infants: infants, } } );
  }

  private onChangeInfant(data: number): void {
    const adult = this.state.value.adult;
    const child = this.state.value.child;
    this.setState( { value: { adult: adult, child: child, infants: data, } } );
  }

  private onChangeChild(data: number): void {
    this.setState(
      {value:{adult: this.state.value.adult,child: data, infants: this.state.value.infants,}}
    );
  }

  private showClearButton() {
    this.setState({clearButtonMustBeShown: true });
  }

  private hideClearButton() {
    this.setState({ clearButtonMustBeShown: false });
  }

  private handleApplyButton(){
    this.setState({total:this.getValueForInputField()})
    this.showClearButton();
  }
  
  private handleClearButton(){
    this.setState({total:''});
    this.hideClearButton();
  }

  private getValueForInputField():string {
      let result = '';
      let total = this.state.value.adult + this.state.value.child;
      result = total + " " + this.spellCases.guests[this.getPosInSpellCasesArray(total)];
      if (this.state.value.infants > 0) {
        result += ',  ' + this.state.value.infants + " " + this.spellCases.infants[this.getPosInSpellCasesArray(this.state.value.infants)];
      }
      if (total === 0) {
        result = '';
      }
      return result;
  }

  private handleDropdownClick() {
    const isOpened = this.state.opened;
    this.setState({opened:!isOpened});
  }

  private getPosInSpellCasesArray(result:number): number {
    if (result === 1) {
      return 0;
    }
    else if (result >= 5 && result < 21) {
      return 2;
    }
    else if
      (Number(this.getLastNumber(result)) >= 2 && Number(this.getLastNumber(result)) <= 4) {
      return 1;
    }
    else {
      return 2;
    }
  }

  private getLastNumber(value:number): number {
    return Number(value.toString().split("").pop());
  }

  render() {
    const showClearButton = (this.state.clearButtonMustBeShown && this.state.total.length > 0) ? 'visible' : 'hidden';
    return (
      <div className={this.dropdownClassName}>
        <div className='dropdown__input-wrapper' onClick={this.handleDropdownClick}>
          <input type="text" readOnly className='dropdown__input' placeholder={this.state.placeholder} 
          value={this.state.total}/>
          <div className='dropdown__arrow'>keyboard_arrow_down</div>
        </div>
        <div className={this.state.opened ? 'dropdown__body dropdown_is-opened' :'dropdown__body'}>
          <DropdownCounter 
            text={'Взрослые'} 
            number={this.state.value.adult}
            onChange={this.onChangeAdult}>
          </DropdownCounter>
          <DropdownCounter
            text={'Дети'}
            number={this.state.value.child}
            onChange={this.onChangeChild}>
          </DropdownCounter>
          <DropdownCounter
            text={'Младенцы'}
            number={this.state.value.infants}
            onChange={this.onChangeInfant}>
          </DropdownCounter>
          <div className={'dropdown__body-buttons'}>
            <button className='button button_color_transparent' onClick={this.handleClearButton}
            style={{ visibility : showClearButton }}>
              <span className='button__label'>
                Очистить
              </span>
            </button>
            <button className='button button_color_transparent' onClick={this.handleApplyButton}>
              <span className='button__label'>
                Применить
              </span> 
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DropdownGuests;