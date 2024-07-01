import React from "react";
import { Pressable, GestureResponderEvent } from "react-native";

import { Box, Text } from "@/utils/theme";

interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      {({ pressed }) => (
        <Box
          alignItems="center"
          paddingVertical="ssm"
          backgroundColor={
            pressed && !disabled
              ? "darkestPlum"
              : disabled
                ? "lightGray"
                : "darkPlum"
          }
          borderRadius="l"
        >
          <Text variant="buttonText" color="white">
            {title}
          </Text>
        </Box>
      )}
    </Pressable>
  );
};
