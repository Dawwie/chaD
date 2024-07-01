import { Controller, Control } from "react-hook-form";

import { CustomTextInput } from "../CustomTextInput";

import { Box, Text } from "@/utils/theme";

interface FormInputProps extends React.ComponentProps<typeof CustomTextInput> {
  label: string;
  name: string;
  control: Control<any>;
  containerStyle?: any;
}

export const FormInput = ({
  label,
  name,
  control,
  placeholder,
  value,
  variant,
  keyboardType,
  autoCapitalize,
  containerStyle,
  ...rest
}: FormInputProps) => {
  return (
    <Box style={containerStyle}>
      <Text variant="titleInput" paddingBottom="s" color="aliceBlue">
        {label}
      </Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            variant={variant}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            {...rest}
          />
        )}
        name={name}
      />
    </Box>
  );
};
