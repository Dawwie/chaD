import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";

import Clear from "@/assets/icons/clear.svg";
import VisionLow from "@/assets/icons/vision-low.svg";
import Vision from "@/assets/icons/vision.svg";
import { Box } from "@/utils/theme";

const TEXT_INPUT_HEIGHT = 47;
const TEXT_INPUT_WIDTH = 311;

interface CustomTextInputProps extends TextInputProps {
  error?: boolean;
  disabled?: boolean;
  variant?: "default" | "password";
}

export const CustomTextInput = ({
  value,
  onChangeText,
  onBlur,
  placeholder,
  secureTextEntry,
  error,
  disabled,
  variant = "default",
  ...rest
}: CustomTextInputProps) => {
  const [inputValue, setInputValue] = useState<string>(value || "");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(
    variant !== "password",
  );

  const handleTextChange = (text: string) => {
    setInputValue(text);
    onChangeText && onChangeText(text);
  };

  const handleClear = () => {
    setInputValue("");
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
      paddingHorizontal="m"
      paddingVertical="s"
      borderRadius="ml"
      backgroundColor={disabled ? "veryLightGray" : "white"}
      flexDirection="row"
      alignItems="center"
      borderWidth={isFocused || error ? 2 : 0}
      borderColor={isFocused && !error ? "darkPlum" : error ? "error" : "white"}
    >
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        editable={!disabled}
        secureTextEntry={!showPassword}
        placeholderTextColor={disabled ? "gray" : "darkgray"}
        {...rest}
      />
      {!disabled && (
        <TouchableOpacity
          onPress={variant === "password" ? toggleShowPassword : handleClear}
          style={styles.icon}
        >
          {variant === "password" ? (
            showPassword ? (
              <VisionLow />
            ) : (
              <Vision />
            )
          ) : (
            inputValue.length > 0 && <Clear />
          )}
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
  icon: {
    marginLeft: 8,
  },
});
