import { CustomTextInput } from "../CustomTextInput";

import { Box, Text } from "@/utils/theme";

interface FormInputProps extends React.ComponentProps<typeof CustomTextInput> {
  label: string;
  containerStyle?: any;
}

export const FormInput = ({
  label,
  placeholder,
  value,
  variant,
  onChangeText,
  keyboardType,
  autoCapitalize,
  onSubmitEditing,
  containerStyle,
  ...rest
}: FormInputProps) => {
  return (
    <Box style={containerStyle}>
      <Text variant="titleInput" paddingBottom="s" color="aliceBlue">
        {label}
      </Text>
      <CustomTextInput
        placeholder={placeholder}
        value={value}
        variant={variant}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        onSubmitEditing={onSubmitEditing}
        {...rest}
      />
    </Box>
  );
};
