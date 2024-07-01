import { SignupFooter } from "./components/SignupFooter";
import { useSignupScreen } from "./hooks/useSignupScreen";

import { FormInput } from "@/components/form/FormInput";
import { FormTemplate } from "@/components/form/FormTemplate";
import { Box } from "@/utils/theme";

export const SignupScreen = () => {
  const { control, isValid, handleSubmit } = useSignupScreen();
  const onSubmit = (data) => {
    //
  };

  return (
    <FormTemplate
      title="Create account"
      renderFooter={() => (
        <SignupFooter
          onSubmit={handleSubmit(onSubmit)}
          isButtonDisabled={!isValid}
        />
      )}
    >
      <Box rowGap="m">
        <FormInput
          label="e-mail address"
          control={control}
          name="email"
          required
        />
        <FormInput
          label="first name"
          control={control}
          name="firstName"
          required
        />
        <FormInput
          label="last name"
          control={control}
          name="lastName"
          required
        />
        <FormInput
          label="password"
          control={control}
          name="password"
          variant="password"
          required
        />
        <FormInput
          label="password confirmation"
          control={control}
          name="passwordConfirmation"
          variant="password"
          required
        />
      </Box>
    </FormTemplate>
  );
};
