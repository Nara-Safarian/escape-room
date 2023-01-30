import { StatusCodes } from 'http-status-codes';
import { AuthorizationStatus, QuestGenre, QuestLevel } from '../constants.js';
import {store} from '../store/index.js';
import { Quest } from './quest.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type User = {
  authorizationStatus: AuthorizationStatus;
}

export type Quests = {
  currentGenre: QuestGenre;
  currentLevel: QuestLevel;
  allQuests: Quest[];
  currentQuest?: Quest;
}

export type AppInterface = {
  error: string | null;
  errorStatus: StatusCodes | null;
  isLoading: boolean;
}
