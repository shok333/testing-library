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