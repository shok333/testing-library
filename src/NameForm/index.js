import React from 'react';

class NameForm extends React.Component {
  state = {
    inputValue: '',
    value: '',
  };

  addName = () => {
    this.setState(({inputValue}) => ({
      value: inputValue,
      inputValue: ''
    }));
  }

  valueChangeHandler = ({target}) => {
    this.setState({
      inputValue: target.value,
    });
  }

  render () {
    return (
      <div>
        <div>
          Сохраненное имя:
          <span>{this.state.value}</span>
        </div>
        <input value={this.state.inputValue} onChange={this.valueChangeHandler}/>
        <button onClick={this.addName}>Сохранить имя</button>
      </div>
    );
  }
}

export default NameForm;
