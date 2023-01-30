import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {APIRoute, NameSpace} from '../constants';
import { Quest } from '../types/quest';
import { loadQuests, setCurrentQuest } from './action';

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch;
   state: State;
   extra: AxiosInstance;
 }>(
   `${NameSpace.Quests}/fetchQuests`,
   async (_arg, {dispatch, extra: api}) => {
     const {data} = await api.get<Quest[]>(APIRoute.Quests);
     dispatch(loadQuests(data));
   },
 );

export const fetchQuestAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Quests}/fetchQuest`,
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
    dispatch(setCurrentQuest(data));
  },
);
