import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Text, Box } from "@/utils/theme";

interface Props {
  headerTitle?: string;
  isBackButton?: boolean;
  children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({
  headerTitle,
  isBackButton,
  children,
}) => {
  const insets = useSafeAreaInsets();

  const renderHeaderTitle = () => {
    return (
      <Box flexDirection="row" alignItems="center">
        <Text variant="heading2" color="darkPlum">
          {headerTitle}
        </Text>
      </Box>
    );
  };

  return (
    <Box
      backgroundColor="lightBlue"
      style={{ paddingTop: insets.top }}
      borderBottomLeftRadius="xl"
      borderBottomRightRadius="xl"
      padding="m"
    >
      <Box flexDirection="row" justifyContent="space-between">
        {headerTitle && renderHeaderTitle()}
        {children && children}
      </Box>
    </Box>
  );
};
