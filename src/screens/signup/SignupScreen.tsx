import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

import { SignUpFooter } from "./components/SignUpFooter";
import { useSignUpScreen } from "./hooks/useSignUpScreen";

import { REGISTER_USER } from "@/api/queries/auth";
import { RegisterUserPayload } from "@/api/types/auth";
import { FormInput } from "@/components/form/FormInput";
import { FormTemplate } from "@/components/form/FormTemplate";
import { SignUpScreenNavigationProp } from "@/navigation/types";
import { Box } from "@/utils/theme";

export const SignUpScreen = () => {
  const { control, isValid, reset, handleSubmit } = useSignUpScreen();
  const [registerUser] = useMutation(REGISTER_USER);
  const { navigate } = useNavigation<SignUpScreenNavigationProp>();

  const onSubmit = async (registerData: RegisterUserPayload) => {
    try {
      await registerUser({
        variables: registerData,
      });
      navigate("LOGIN");
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

  return (
    <FormTemplate
      title="Create account"
      renderFooter={() => (
        <SignUpFooter
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
