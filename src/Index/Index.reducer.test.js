import {reducer, getDefaultState} from './reducer';
import {addItemAction, removeItemAction} from './actions';

test ('check Index reducer add Item', () => {
  const stateWithItemEtalonSnapshot = {
    ...getDefaultState(),
    items: [
      'mocked value'
    ]
  };

  expect(reducer(getDefaultState(), addItemAction('mocked value'))).toEqual(stateWithItemEtalonSnapshot)
});

test ('check Index reducer remove Item', () => {
  const items = ['item 1', 'item 2'];
  const stateWithItemEtalonSnapshot = {
    ...getDefaultState(),
    items
  };

  expect(reducer({...getDefaultState(), items: [...items, 'mocked value'] }, removeItemAction('mocked value'))).toEqual(stateWithItemEtalonSnapshot);
})