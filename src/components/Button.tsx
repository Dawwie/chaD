import React from "react";
import { Pressable, GestureResponderEvent } from "react-native";

import { LoadingIndicator } from "./LoadingIndicator";

import { Box, Text } from "@/utils/theme";

interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled,
  isLoading,
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
          {isLoading ? (
            <LoadingIndicator
              size="small"
              flexContainer={false}
              color="white"
            />
          ) : (
            <Text variant="buttonText" color="white">
              {title}
            </Text>
          )}
        </Box>
      )}
    </Pressable>
  );
};
