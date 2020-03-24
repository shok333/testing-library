import {addItemAction, removeItemAction} from './actions';

test ('check Index addItemAction addItemAction', () => {
  expect(addItemAction('mocked payload')).toEqual({
    type: 'ADD_ITEM',
    payload: 'mocked payload',
  })
})

test ('check Index removeItemAction addItemAction', () => {
  expect(removeItemAction('mocked payload')).toEqual({
    type: 'REMOVE_ITEM',
    payload: 'mocked payload',
  })
})