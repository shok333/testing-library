export function getDefaultState () {
  return {
    items: []
  };
}

export function reducer (state = getDefaultState(), {type, payload}) {
  switch (type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, payload]
      }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((value) => (value !== payload))
      }
    }

    case 'LOAD_ITEMS_SUCCESS': {
      return {
        ...state,
        items: [...state.items, ...payload]
      }
    }

    default:
      return state
  }
}