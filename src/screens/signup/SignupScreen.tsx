import { SignUpFooter } from "./components/SignUpFooter";
import { useSignUpScreen } from "./hooks/useSignUpScreen";

import { FormInput } from "@/components/form/FormInput";
import { FormTemplate } from "@/components/form/FormTemplate";
import { Box } from "@/utils/theme";

export const SignUpScreen = () => {
  const { control, isValid, isPending, onSubmit, handleSubmit } =
    useSignUpScreen();

  return (
    <FormTemplate
      title="Create account"
      renderFooter={() => (
        <SignUpFooter
          onSubmit={handleSubmit(onSubmit)}
          isButtonDisabled={!isValid}
          isButtonLoading={isPending}
        />
      )}
    >
      <Box rowGap="m">
        <FormInput
          label="e-mail address"
          control={control}
          name="email"
          keyboardType="email-address"
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
