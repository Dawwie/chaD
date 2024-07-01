import { useNavigation } from "@react-navigation/native";

import { Button } from "@/components/Button";
import { TextButton } from "@/components/TextButton";
import { LoginScreenNavigationProp } from "@/navigation/types";
import { Text, Box } from "@/utils/theme";

interface LoginFooterProps {
  isButtonDisabled?: boolean;
  isButtonLoading?: boolean;
  onSubmit: () => void;
}

export const LoginFooter = ({
  isButtonDisabled,
  isButtonLoading,
  onSubmit,
}: LoginFooterProps) => {
  const { navigate } = useNavigation<LoginScreenNavigationProp>();

  return (
    <Box>
      <Button
        title="Log in"
        onPress={onSubmit}
        disabled={isButtonDisabled}
        isLoading={isButtonLoading}
      />
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
};
