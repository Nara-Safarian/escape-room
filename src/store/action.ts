import {createAction} from '@reduxjs/toolkit';
import {AppRoute, NameSpace} from '../constants';
import {ServerError} from '../types/server-error';
import { Quest } from '../types/quest';

export const loadQuests = createAction<Quest[]>(`${NameSpace.Quests}/loadQuests`);
export const setCurrentQuest = createAction<Quest>(`${NameSpace.Quests}/setCurrentQuest`);

export const redirectToRoute = createAction<AppRoute | string>(`${NameSpace.User}/redirectToRoute`);

export const setError = createAction<ServerError | null | string>(`${NameSpace.AppInterface}/setError`);
export const setIsLoading = createAction<boolean>(`${NameSpace.AppInterface}/setIsLoading`);
