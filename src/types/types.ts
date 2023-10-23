export enum Endpoints {
  LOGIN = '/login',
  LOGOUT = '/logout,',
  REGISTER = '/register',
  REFRESH = '/refresh',
}

export enum Params {
  EMPTHY = '',
  FREEBOOKS = '?freeBooks=true',
}

export enum Roles {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
}

export enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export const DEFAULT_BOOKS_TAKE = '6';
