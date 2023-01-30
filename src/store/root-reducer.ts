import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constants';
import {quests} from './quests/quests';
import {appInterface} from './app-interface/app-interface';
import {user} from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.Quests]: quests.reducer,
  [NameSpace.AppInterface]: appInterface.reducer,
  [NameSpace.User]: user.reducer,
});
