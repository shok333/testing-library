import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItemAction, removeItemAction} from './actions';

class Index extends React.Component {
  state = {
    value: '',
  };

  addItem = () => {
    this.props.addItem(this.state.value);

    this.setState({
      value: '',
    });
  }

  valueChangeHandler = ({target}) => {
    this.setState({
      value: target.value,
    });
  }

  removeItem = (value) => () => {
    this.props.removeItem(value);
  }

  render () {
    return (
      <div>
        <h1>Index</h1>
        <ul>
          {
            this.props.items.map((item, index) => (
              <li key={index}>{item} <button onClick={this.removeItem(item)}>remove</button></li>
            ))
          }
        </ul>
        <input value={this.state.value} onChange={this.valueChangeHandler}></input>
        <button onClick={this.addItem}>Add item</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: bindActionCreators(addItemAction, dispatch),
    removeItem: bindActionCreators(removeItemAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);