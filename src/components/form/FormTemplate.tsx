import { useTheme } from "@shopify/restyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Text } from "@/utils/theme";

interface FormTemplateProps extends React.ComponentProps<typeof Box> {
  title: string;
  subtitle?: string;
  renderFooter?: () => React.ReactNode;
}

export const FormTemplate = ({
  children,
  title,
  subtitle,
  renderFooter,
  ...props
}: FormTemplateProps) => {
  const insets = useSafeAreaInsets();
  const { spacing } = useTheme();
  return (
    <Box
      flex={1}
      backgroundColor="lightBlue"
      paddingBottom="ml"
      style={{ paddingTop: insets.top + spacing.ml }}
      {...props}
    >
      <Box paddingHorizontal="m">
        <Text variant="heading2" color="darkPlum" paddingBottom="l">
          {title}
        </Text>
        {subtitle && (
          <Text variant="heading3" color="white" paddingBottom="2xl">
            {subtitle}
          </Text>
        )}
      </Box>
      <Box
        flex={1}
        justifyContent="space-between"
        paddingHorizontal="m"
        style={{ paddingBottom: insets.bottom }}
      >
        <Box paddingHorizontal="xl" alignItems="center">
          {children}
        </Box>
        {renderFooter && <Box>{renderFooter()}</Box>}
      </Box>
    </Box>
  );
};
