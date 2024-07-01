import React from "react";
import { TouchableOpacity } from "react-native";

import { Colors, Text, TextVariants } from "@/utils/theme";

interface ButtonProps {
  title: string;
  textVariant?: TextVariants;
  color?: Colors;
  onPress?: () => void;
}

export const TextButton: React.FC<ButtonProps> = ({
  title,
  textVariant = "buttonTextSmall",
  color = "darkPlum",
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text variant={textVariant} color={color}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
