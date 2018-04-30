import 'zone.js/dist/zone';

import '@webcomponents/custom-elements/src/native-shim';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ButtonModule } from './button.module';

platformBrowserDynamic().bootstrapModule(ButtonModule);
