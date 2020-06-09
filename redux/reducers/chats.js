export const outgoingReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHATS': {
      return action.payload;
    }
    default:
      return state;
  }
};

export const incomingReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CHATS': {
      return action.payload;
    }

    default:
      return state;
  }
};

export const activeChats = (state = [], action) => {
  switch (action.type) {
    case 'GET_ACTIVE_CHATS': {
      return action.payload;
    }

    default:
      return state;
  }
};
