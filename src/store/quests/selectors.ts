import {NameSpace} from '../../constants';
import { Quest } from '../../types/quest';
import {State} from '../../types/state';

export const getAllQuests = (state: State): Quest[] => state[NameSpace.Quests].allQuests;
export const getCurrentQuest = (state: State): Quest | undefined => state[NameSpace.Quests].currentQuest;
