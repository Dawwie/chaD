import { useNavigation } from "@react-navigation/native";

import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import { TextButton } from "@/components/TextButton";
import { TERMS_AND_CONDITIONS, PRIVACY_POLICY_URL } from "@/constants/sites";
import { SignUpScreenNavigationProp } from "@/navigation/types";
import { Text, Box } from "@/utils/theme";

interface SignUpFooterProps {
  isButtonDisabled?: boolean;
  onSubmit: () => void;
}

export const SignUpFooter = ({
  isButtonDisabled,
  onSubmit,
}: SignUpFooterProps) => {
  const { navigate } = useNavigation<SignUpScreenNavigationProp>();

  return (
    <Box>
      <Button title="Sign up" onPress={onSubmit} disabled={isButtonDisabled} />
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
};
