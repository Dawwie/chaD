import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";

import VisionLow from "@/assets/icons/vision-low.svg";
import Vision from "@/assets/icons/vision.svg";
import { Box } from "@/utils/theme";

const TEXT_INPUT_HEIGHT = 47;
const TEXT_INPUT_WIDTH = 311;

interface CustomTextInputProps extends TextInputProps {
  error?: boolean;
  disabled?: boolean;
  variant?: "default" | "password";
  isBottomRightRounded?: boolean;
}

export const CustomTextInput = ({
  value,
  onChangeText,
  onBlur,
  placeholder,
  error,
  disabled,
  variant = "default",
  clearButtonMode = "always",
  isBottomRightRounded = true,
  ...rest
}: CustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(
    variant !== "password",
  );

  const handleTextChange = (text: string) => {
    onChangeText && onChangeText(text);
  };

  const handleFocus = () => {
    if (!disabled) {
      setIsFocused(true);
    }
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      width={TEXT_INPUT_WIDTH}
      height={TEXT_INPUT_HEIGHT}
      paddingLeft="m"
      paddingRight="s"
      paddingVertical="s"
      borderRadius="ml"
      borderBottomRightRadius={isBottomRightRounded ? "ml" : "none"}
      backgroundColor={disabled ? "veryLightGray" : "white"}
      flexDirection="row"
      alignItems="center"
      borderWidth={isFocused || error ? 2 : 0}
      borderColor={isFocused && !error ? "darkPlum" : error ? "error" : "white"}
    >
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        editable={!disabled}
        secureTextEntry={!showPassword}
        placeholderTextColor={disabled ? "gray" : "darkgray"}
        clearButtonMode={clearButtonMode}
        {...rest}
      />
      {!disabled && variant === "password" && (
        <TouchableOpacity onPress={toggleShowPassword}>
          {showPassword ? <VisionLow /> : <Vision />}
        </TouchableOpacity>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: "100%",
  },
});
