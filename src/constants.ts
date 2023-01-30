export const enum AppRoute {
  Main = '/',
  LogIn = '/login',
  MyQuests = '/my-quests',
  Booking = '/quest/:id/booking',
  Quest = '/quest/:id',
  Contacts = '/contacts',
  NotFound = '/404',
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const enum NameSpace {
  Quests = 'QUESTS',
  AppInterface = 'APP_INTERFACE',
  User = 'USER',
}

export const enum QuestLevel {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const enum QuestGenre {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export enum ActiveHeaderElement {
  Quests = 'Quests',
  Contacts = 'Contacts',
  MyRseservations = 'Reservations'
}

export const X_TOKEN_HEADER_NAME = 'x-token';

export enum APIRoute {
  Quests = '/escape-room/quest',
}
