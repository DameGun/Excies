type OnPressFunc<T = any> = (item?: T) => void;

type PressableProps<T = any> = {
  onPress: OnPressFunc<T>;
};

export type { OnPressFunc, PressableProps };
