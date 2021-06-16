import { IconName } from 'src/components';
import { HomeRoutes } from './routes.model';

export interface DrawerMenuItem {
  icon: IconName;
  label: string;
  screen: keyof HomeRoutes | 'Logout';
  color: string;
}
