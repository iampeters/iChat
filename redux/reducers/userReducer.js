import db from '../../db';

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

export const authReducer = (state = {}, action) => {
  db.find({isAuthenticated: true}, (err, res) => {
    if (err) {
      console.log(err);
    }
    state = res;
  });

  switch (action.type) {
    case 'IS_AUTHENTICATED': {
      return action.payload;
    }

    default:
      return state;
  }
};
export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'AUTHENTICATE': {
      return action.payload;
    }

    default:
      return state;
  }
};
