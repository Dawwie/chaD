import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { setItemAsync } from "expo-secure-store";

import { useLoginScreen } from "./hooks/useLoginScreen";

import { LOGIN_USER } from "@/api/login";
import { Button } from "@/components/Button";
import { TextButton } from "@/components/TextButton";
import { FormInput } from "@/components/form/FormInput";
import { FormTemplate } from "@/components/form/FormTemplate";
import { LoginScreenNavigationProp } from "@/navigation/types";
import { LoginUserPayload } from "@/types/login";
import { Box, Text } from "@/utils/theme";

export const LoginScreen = () => {
  const { navigate } = useNavigation<LoginScreenNavigationProp>();

  const { control, reset, handleSubmit, setUser } = useLoginScreen();
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

  const renderFooter = () => (
    <Box>
      <Button title="Log in" onPress={handleSubmit(onSubmit)} />
      <Box
        flexDirection="row"
        columnGap="s"
        justifyContent="center"
        alignItems="center"
        paddingTop="m"
      >
        <Text variant="bodyText" color="white">
          Don't have an account?
        </Text>
        <TextButton title="Sign up" onPress={() => navigate("SIGNUP")} />
      </Box>
    </Box>
  );

  return (
    <FormTemplate
      title="Welcome back"
      subtitle="Log in and stay in touch with everyone!"
      renderFooter={renderFooter}
    >
      <Box rowGap="m">
        <FormInput label="e-mail address" control={control} name="email" />
        <FormInput
          label="password"
          control={control}
          name="password"
          variant="password"
        />
      </Box>
    </FormTemplate>
  );
};
