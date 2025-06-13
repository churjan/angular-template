import { provideNzIcons } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { HomeOutline, PlusOutline, SkinOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [HomeOutline, PlusOutline, SkinOutline];
const iconsProvider = provideNzIcons(icons);

export { iconsProvider };
