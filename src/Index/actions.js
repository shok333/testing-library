import fetchMock from 'fetch-mock';

fetchMock.get('/items-list', ['item1', 'item2'], {
  delay: 2000,
});

export function addItemAction (payload) {
  return {
    type: 'ADD_ITEM',
    payload,
  }
}

export function removeItemAction (payload) {
  return {
    type: 'REMOVE_ITEM',
    payload,
  }
}

export function loadItemsAction () {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_ITEMS',
    });


    fetch ('/items-list')
      .then((response) => response.json())
      .then((payload) => {
        dispatch({
          type: 'LOAD_ITEMS_SUCCESS',
          payload,
        });
      })
      .catch(() => {
        console.log(222);
      })
  };
}