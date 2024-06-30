import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Back from "@/assets/icons/back.svg";
import { RoomsScreenNavigationProp } from "@/navigation/types";
import { Box } from "@/utils/theme";

interface HeaderProps {
  isBackButton?: boolean;
  children?: React.ReactNode;
}

export const HEADER_HEIGHT = 120;

export const Header = ({ isBackButton, children }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const { goBack } = useNavigation<RoomsScreenNavigationProp>();

  return (
    <Box
      backgroundColor="lightBlue"
      style={{ paddingTop: insets.top }}
      borderBottomLeftRadius="xl"
      borderBottomRightRadius="xl"
      padding="m"
      flexDirection="row"
      alignItems="center"
      height={HEADER_HEIGHT}
    >
      {isBackButton && (
        <TouchableOpacity onPress={goBack}>
          <Back />
        </TouchableOpacity>
      )}
      <Box
        flex={1}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {children && children}
      </Box>
    </Box>
  );
};
