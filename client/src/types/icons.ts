import { AntDesign, Entypo } from '@expo/vector-icons';

type AntIconNames = keyof (typeof AntDesign)['glyphMap'];
type EntypoIconNames = keyof (typeof Entypo)['glyphMap'];

export type { AntIconNames, EntypoIconNames };
