import React, { useCallback } from "react";
import { Linking, TouchableOpacity } from "react-native";

import { Text, TextVariants } from "@/utils/theme";

interface LinkProps {
  text: string;
  url: string;
  textVariant?: TextVariants;
}

export const Link: React.FC<LinkProps> = ({
  text,
  url,
  textVariant = "specialText",
}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text variant={textVariant} color="mediumBlue">
        {text}
      </Text>
    </TouchableOpacity>
  );
};
