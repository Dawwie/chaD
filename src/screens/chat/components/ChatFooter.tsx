import { KeyboardAvoidingView, Pressable } from "react-native";

import Send from "@/assets/icons/send.svg";
import { CustomTextInput } from "@/components/CustomTextInput";
import { IS_IOS } from "@/constants/commons";
import { Box, useTheme } from "@/utils/theme";

const CHAT_FOOTER_HEIGHT = 102;

export const ChatFooter = () => {
  const { colors, spacing } = useTheme();

  const sendMessage = () => {
    // Send message logic
  };

  return (
    <KeyboardAvoidingView behavior={IS_IOS ? "padding" : "height"}>
      <Box
        height={CHAT_FOOTER_HEIGHT}
        backgroundColor="lightBlue"
        borderTopLeftRadius="l"
        borderTopRightRadius="l"
        paddingHorizontal="sm"
        paddingTop="sm"
        flexDirection="row"
        justifyContent="center"
      >
        <CustomTextInput isBottomRightRounded={false} />
        <Pressable onPress={sendMessage} style={{ marginLeft: spacing.s }}>
          {({ pressed }) => (
            <Send color={pressed ? colors.darkestPlum : colors.darkPlum} />
          )}
        </Pressable>
      </Box>
    </KeyboardAvoidingView>
  );
};
