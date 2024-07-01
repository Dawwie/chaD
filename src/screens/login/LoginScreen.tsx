import { useNavigation } from "@react-navigation/native";

import { Button } from "@/components/Button";
import { TextButton } from "@/components/TextButton";
import { FormInput } from "@/components/form/FormInput";
import { FormTemplate } from "@/components/form/FormTemplate";
import { LoginScreenNavigationProp } from "@/navigation/types";
import { Box, Text } from "@/utils/theme";

export const LoginScreen = () => {
  const { navigate } = useNavigation<LoginScreenNavigationProp>();
  const renderFooter = () => (
    <Box>
      <Button title="Log in" />
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
        <FormInput label="e-mail address" />
        <FormInput label="password" variant="password" />
      </Box>
    </FormTemplate>
  );
};
