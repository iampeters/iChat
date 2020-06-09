import {combineReducers} from 'redux';
import {userReducer, authReducer, loginReducer} from './userReducer';
import {incomingReducer, outgoingReducer, activeChats} from './chats';

const rootReducer = combineReducers({
  user: userReducer,
  incoming: incomingReducer,
  outgoing: outgoingReducer,
  activeChats,
  auth: authReducer,
  login: loginReducer,
});

export default rootReducer;
