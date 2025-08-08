import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { AboutMe } from './about-me';
import { KeySkills } from './key-skills';
import { OtherStuff } from './other-stuff';
import { KeysValueConverter } from './keys-value-converter';

Aurelia
  .register(
    AboutMe,
    KeySkills,
    OtherStuff,
    KeysValueConverter
  )
  .app(MyApp)
  .start();
