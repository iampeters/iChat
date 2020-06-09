import {combineReducers} from 'redux';
import {
  userReducer,
  authReducer,
  loginReducer,
  registerReducer,
} from './userReducer';
import {incomingReducer, outgoingReducer, activeChats} from './chats';

const rootReducer = combineReducers({
  user: userReducer,
  incoming: incomingReducer,
  outgoing: outgoingReducer,
  activeChats,
  auth: authReducer,
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
