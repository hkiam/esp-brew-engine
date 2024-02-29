import { IMashStep } from './IMashStep';
import { INotification } from './INotification';

export interface IMashSchedule {
  name: string;
  boil: boolean;
  steps: Array<IMashStep>;
  notifications: Array<INotification>;
}
