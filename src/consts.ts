export enum AppRoute {
  Main = '/',
  LogIn = '/login',
  MyQuests = '/my-quests',
  Booking = '/quest/:id/booking',
  Quest = '/quest/:id',
  Contacts = '/contacts',
  NotFound = '/404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
