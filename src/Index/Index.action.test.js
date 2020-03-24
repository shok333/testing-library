import {addItemAction, removeItemAction, loadItemsAction} from './actions';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

export const mockStore = configureMockStore([thunk]);

// import fetchMock from 'fetch-mock';

// fetchMock.get('http://localhost:3000/items-list', ['item1', 'item2'], {
//   delay: 2000,
// });

test ('check Index addItemAction', () => {
  expect(addItemAction('mocked payload')).toEqual({
    type: 'ADD_ITEM',
    payload: 'mocked payload',
  })
})

test ('check Index removeItemAction', () => {
  expect(removeItemAction('mocked payload')).toEqual({
    type: 'REMOVE_ITEM',
    payload: 'mocked payload',
  })
})

function findAction(store, type) {
  return store.getActions().find(action => action.type === type);
}

export async function getAction(store, type) {
  const action = findAction(store, type);
  if (action) return Promise.resolve(action);

  return new Promise(resolve => {
    store.subscribe(() => {
      const action = findAction(store, type);
      if (action) resolve(action);
    });
  });
}

test ('check Index loadItemsAction', async function () {
  const store = mockStore();

  store.dispatch(loadItemsAction());

  expect(await getAction(store, "LOAD_ITEMS")).toEqual({type: "LOAD_ITEMS"});
  expect(await getAction(store, "LOAD_ITEMS_SUCCESS")).toEqual({
    type: 'LOAD_ITEMS_SUCCESS',
    payload: ['item1', 'item2'],
  });
})