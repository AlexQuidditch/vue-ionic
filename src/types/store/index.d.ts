import { VersionState } from './version';
import { UsersState } from './users';

/**
 * * @AlexQuidditch
 * декларация стейта модулей приложения
 * любое изменение схемы стейта нужно начинать отсюда
 */
export interface RootState {
  version: VersionState;
  Users: UsersState;
}
