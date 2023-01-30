import { QuestGenre, QuestLevel } from './constants';

export function levelName(level: QuestLevel) {
  if (level === QuestLevel.Easy) {
    return 'Лёгкий';
  }
  if (level === QuestLevel.Medium) {
    return 'Средний';
  }
  if (level === QuestLevel.Hard) {
    return 'Сложный';
  }
}

export function genreName(genre: QuestGenre) {
  if (genre === QuestGenre.Adventures) {
    return 'Приключения';
  }
  if (genre === QuestGenre.Horror) {
    return 'Ужасы';
  }
  if (genre === QuestGenre.Mystic) {
    return 'Мистика';
  }
  if (genre === QuestGenre.Detective) {
    return 'Детектив';
  }
  if (genre === QuestGenre.SciFi) {
    return 'Sci-fi';
  }
  return 'Все квесты';
}
