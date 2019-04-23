import { UserNameModel } from './user-name.model';
import {formatDate} from '@angular/common';

export const mockUser = new UserNameModel(
    1,
    'pedro.alvarez@gmail.com',
    'Pedro',
    'Álvarez',
    'pdrAlv',
    'alv67!',
    555555555,
    'XXXXXXXX',
    'España',
    'Hombre',
    new Date(1984, 7, 8), 'C/Test, Madrid'
);
