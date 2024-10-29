import { AntDesign, Entypo } from '@expo/vector-icons';

type AntIconNames = keyof (typeof AntDesign)['glyphMap'];
type EntypoIconNames = keyof (typeof Entypo)['glyphMap'];

type IconParams =
  | {
      type: 'AntDesign';
      name: AntIconNames;
    }
  | {
      type: 'Entypo';
      name: EntypoIconNames;
    };

export type { AntIconNames, EntypoIconNames, IconParams };
