import { Keyboard, Pressable, PressableProps } from "react-native";

interface DismissKeyboardProps extends PressableProps {}

export const DismissKeyboard = ({
  children,
  ...rest
}: DismissKeyboardProps) => (
  <Pressable
    onPress={() => {
      Keyboard.dismiss();
    }}
    style={{ flex: 1 }}
    {...rest}
  >
    {children}
  </Pressable>
);
