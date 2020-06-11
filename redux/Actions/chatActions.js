let chats = [];
let activeChats = [].reverse();

export const getChats = () => {
  return dispatch => {
    dispatch({type: 'GET_CHATS', payload: chats});
  };
};

export const setChats = state => {
  chats.push(state);
  return dispatch => {
    dispatch({type: 'SET_CHATS', payload: state});
    dispatch({type: 'GET_CHATS', payload: chats});
  };
};

export const getActiveChats = state => {
  return dispatch => {
    dispatch({
      type: 'GET_ACTIVE_CHATS',
      payload: Object.assign([], activeChats),
    });
  };
};

export const setActiveChats = state => {
  const user = activeChats.find(item => {
    if (item.username === state.username) {
      const index = activeChats.indexOf(item);
      item.messageCount
        ? (state.messageCount += item.messageCount)
        : state.messageCount;
      activeChats.splice(index, 1, state);

      return item;
    }
  });

  if (user === undefined) {
    activeChats.push(state);
  }
  return dispatch => {
    dispatch({
      type: 'SET_ACTIVE_CHATS',
      payload: Object.assign([], activeChats),
    });
  };
};
