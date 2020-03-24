import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer} from './Index/reducer';
// import reducers from 'root/redux/reducers/indexReducer';
// import indexSaga from 'root/redux/sagas/indexSaga';

const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(
        thunk
      )
    )
);

export default store;