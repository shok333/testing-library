import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import NameForm from './NameForm';
import Index from './Index/index';

class App extends React.Component {
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
      <Provider store={store}>
        <BrowserRouter>
          <nav className="navigation">
            <ul>
              <li><NavLink to="/">Index</NavLink></li>
              <li><NavLink to="/name-form">User form</NavLink></li>
            </ul>
          </nav>
          <Route exact={true} path="/name-form" component={NameForm}/>
          <Route exact={true} path="/" component={Index}/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
