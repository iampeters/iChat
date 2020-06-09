import db from '../../db';
import AuthService from '../../src/Services/AuthService';

export const userAction = state => {
  return dispatch => {
    dispatch({type: 'TYPING', payload: state});
  };
};

export const isAuthenticated = (state = {}) => {
  return dispatch => {
    db.find({isAuthenticated: true}, (err, res) => {
      if (err) {
        dispatch({
          type: 'IS_AUTHENTICATED',
          payload: {isAuthenticated: false},
        });
      } else {
        res.length !== 0 ? (state = res[0]) : (state = res);
        dispatch({type: 'IS_AUTHENTICATED', payload: state});
      }
    });
  };
};

export const login = (state, navigation) => {
  const authService = new AuthService();

  const api = authService.login(state);

  return dispatch => {
    api
      .then(res => {
        const result = res;
        if (result.token) {
          // store user and token to database
          db.insert(
            {
              isAuthenticated: true,
              user: result.result,
              authToken: result.token,
            },
            (err, user) => {
              if (err) {
                // dispatch err
                dispatch({
                  type: 'IS_AUTHENTICATED',
                  payload: {isAuthenticated: false},
                });
              } else {
                // let the app know that login is successful
                dispatch({
                  type: 'IS_AUTHENTICATED',
                  payload: {isAuthenticated: true},
                });
                // send response to login screen
                dispatch({
                  type: 'AUTHENTICATE',
                  payload: {
                    successful: true,
                    message: 'Logged in successfully.',
                  },
                });
              }
            },
          );
        } else {
          // send err to login screen
          dispatch({
            type: 'AUTHENTICATE',
            payload: res,
          });
        }
      })
      .catch(() => {
        // send err to application
        dispatch({
          type: 'AUTHENTICATE',
          payload: {message: 'Oops! Something went wrong', successful: false},
        });
      });
  };
};

export const logout = navigation => {
  return dispatch => {
    db.remove({}, {multi: true}, (err, res) => {
      if (err) {
        console.log(err.response.request._response);
      } else {
        console.log('logged out');
        dispatch(isAuthenticated());

        // navigation.navigate('Splash');
      }
    });
  };
};
