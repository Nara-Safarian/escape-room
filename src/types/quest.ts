import { QuestGenre, QuestLevel } from '../constants';

export type Quest = {
  id: number;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestGenre;
  // Ключ peopleMinMax представлен массивом из двух целочисленых значений. Например, [2, 5]
  peopleMinMax: number[];
  description?: string;
  coverImg?: string;
  coverImgWebp?: string;
}

