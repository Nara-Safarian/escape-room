import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, QuestGenre, QuestLevel} from '../../constants';
import {Quests} from '../../types/state';
import { loadQuests, setCurrentQuest } from '../action';

const initialState: Quests = {
  currentGenre: QuestGenre.All,
  currentLevel: QuestLevel.Any,
  allQuests: [],
};

export const quests = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadQuests, (state, action) => {
        state.allQuests = action.payload;
      })
      .addCase(setCurrentQuest, (state, action) => {
        state.currentQuest = action.payload;
      });
  }
});
