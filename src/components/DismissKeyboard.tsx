import { Keyboard, Pressable, PressableProps } from "react-native";

interface DismissKeyboardProps extends PressableProps {
  children: React.ReactNode;
}

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
