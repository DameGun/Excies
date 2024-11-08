type OnPressFunc<T> = [T] extends [undefined] ? VoidFunction : (item: T) => void;

type PressableProps<T = undefined> = {
  onPress?: OnPressFunc<T>;
};

export type { PressableProps };
