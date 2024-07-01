import { useNavigation } from "@react-navigation/native";

import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import { TextButton } from "@/components/TextButton";
import { FormInput } from "@/components/form/FormInput";
import { FormTemplate } from "@/components/form/FormTemplate";
import { TERMS_AND_CONDITIONS, PRIVACY_POLICY_URL } from "@/constants/sites";
import { LoginScreenNavigationProp } from "@/navigation/types";
import { Text, Box } from "@/utils/theme";

export const SignupScreen = () => {
  const { navigate } = useNavigation<LoginScreenNavigationProp>();
  const renderFooter = () => (
    <Box>
      <Button title="Sign up" />
      <Box marginTop="m" alignItems="center">
        <Text variant="specialText" color="white">
          By signing up you agree with
        </Text>
        <Box flexDirection="row" columnGap="xs">
          <Link text="Terms and Conditions" url={TERMS_AND_CONDITIONS} />
          <Text variant="specialText" color="white">
            and
          </Text>
          <Link text="Privacy Policy" url={PRIVACY_POLICY_URL} />
        </Box>
      </Box>

      <Box
        flexDirection="row"
        columnGap="s"
        justifyContent="center"
        alignItems="center"
        paddingTop="m"
      >
        <Text variant="bodyText" color="white">
          Already have an account?
        </Text>
        <TextButton title="Log in" onPress={() => navigate("LOGIN")} />
      </Box>
    </Box>
  );

  return (
    <FormTemplate title="Create account" renderFooter={renderFooter}>
      <Box rowGap="m">
        <FormInput label="e-mail address" />
        <FormInput label="first name" />
        <FormInput label="last name" />
        <FormInput label="password" />
        <FormInput label="password confirmation" />
      </Box>
    </FormTemplate>
  );
};
