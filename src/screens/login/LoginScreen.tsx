import { LoginFooter } from "./components/LoginFooter";
import { useLoginScreen } from "./hooks/useLoginScreen";

import { FormInput } from "@/components/form/FormInput";
import { FormTemplate } from "@/components/form/FormTemplate";
import { Box } from "@/utils/theme";

export const LoginScreen = () => {
  const { control, isValid, isPending, handleSubmit, onSubmit } =
    useLoginScreen();

  return (
    <FormTemplate
      title="Welcome back"
      subtitle="Log in and stay in touch with everyone!"
      renderFooter={() => (
        <LoginFooter
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
          required
        />
        <FormInput
          label="password"
          control={control}
          name="password"
          variant="password"
          required
        />
      </Box>
    </FormTemplate>
  );
};
