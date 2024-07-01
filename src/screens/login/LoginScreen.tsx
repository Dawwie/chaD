import { useMutation } from "@apollo/client";
import { setItemAsync } from "expo-secure-store";

import { LoginFooter } from "./components/LoginFooter";
import { useLoginScreen } from "./hooks/useLoginScreen";

import { LOGIN_USER } from "@/api/queries/login";
import { FormInput } from "@/components/form/FormInput";
import { FormTemplate } from "@/components/form/FormTemplate";
import { LoginUserPayload } from "@/api/types/login";
import { Box } from "@/utils/theme";

export const LoginScreen = () => {
  const { control, isValid, reset, handleSubmit, setUser } = useLoginScreen();
  const [loginUser] = useMutation(LOGIN_USER);
  const onSubmit = async (loginData: LoginUserPayload) => {
    try {
      const response = await loginUser({
        variables: {
          email: loginData.email,
          password: loginData.password,
        },
      });
      if (response.data) {
        setUser(response.data.loginUser.user);
        setItemAsync("token", response.data.loginUser.token);
      }
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

  return (
    <FormTemplate
      title="Welcome back"
      subtitle="Log in and stay in touch with everyone!"
      renderFooter={() => (
        <LoginFooter
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
