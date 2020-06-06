export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'JOINED': {
      return action.payload;
    }

    case 'TYPING': {
      return action.payload;
    }

    case 'LEFT': {
      return action.payload;
    }

    case 'ONLINE': {
      return action.payload;
    }

    case 'OFFLINE': {
      return action.payload;
    }

    default:
      return state;
  }
};
