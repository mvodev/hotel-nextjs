import React from 'react';

export interface IDropdownCounterProps {
  text: string,
  number: number,
  onChange:Function,
};

interface IDropdownCounterState {
  text: string,
  counter: number,
  onChange: Function,
};

class DropdownCounter extends React.Component <IDropdownCounterProps, IDropdownCounterState> {

  constructor(props: IDropdownCounterProps) {
    super(props);
    this.state = {
      text: props.text,
      counter: props.number,
      onChange:props.onChange,
    };
    this.handleClickMinus = this.handleClickMinus.bind(this);
    this.handleClickPlus = this.handleClickPlus.bind(this);
  }

  private handleClickMinus() {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
      this.state.onChange(this.state.counter - 1);
    }
  }

  private handleClickPlus() {
    this.setState({ counter: this.state.counter + 1});
    this.state.onChange(this.state.counter + 1);
  }

  render() {
    let classNameDecrease = 'container-dropdown__decrease';
    if (this.state.counter > 0) {
      classNameDecrease += ' container-dropdown__decrease_dark';
    }
    return (
      <div className='dropdown-counter'>
        <div className='dropdown-counter__header'>{this.props.text}</div>
        <div className='dropdown-counter__container container-dropdown'>
          <div className={classNameDecrease} onClick={this.handleClickMinus}>-</div>
          <div className='container-dropdown__value'>{this.state.counter}</div>
          <div className='container-dropdown__increase' onClick={this.handleClickPlus}>+</div>
        </div>
      </div>
      )
  }
}

export default DropdownCounter;