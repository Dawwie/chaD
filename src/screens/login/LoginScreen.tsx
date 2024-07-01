import { FormInput } from "@/components/form/FormInput";
import { FormTemplate } from "@/components/form/FormTemplate";
import { Box } from "@/utils/theme";

export const LoginScreen = () => {
  return (
    <FormTemplate
      title="Welcome back"
      subtitle="Log in and stay in touch with everyone!"
    >
      <Box rowGap="m">
        <FormInput label="e-mail address" />
        <FormInput label="password" />
      </Box>
    </FormTemplate>
  );
};
