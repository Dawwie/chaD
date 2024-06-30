import { KeyboardAvoidingView, Pressable } from "react-native";

import Send from "@/assets/icons/send.svg";
import { CustomTextInput } from "@/components/CustomTextInput";
import { IS_IOS } from "@/constants/commons";
import { Box, useTheme } from "@/utils/theme";

const CHAT_FOOTER_HEIGHT = 102;
interface ChatFooterProps {
  value: string;
  onChangeText: (text: string) => void;
  onSendMessage: (message: string) => void;
}

export const ChatFooter = ({
  value,
  onChangeText,
  onSendMessage,
}: ChatFooterProps) => {
  const { colors, spacing } = useTheme();

  const sendMessage = () => {
    const trimmedValue = value.trim();
    if (trimmedValue.length > 0) {
      onSendMessage(trimmedValue);
    }
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
        <CustomTextInput
          value={value}
          onChangeText={onChangeText}
          isBottomRightRounded={false}
          clearButtonMode="never"
        />
        <Pressable onPress={sendMessage} style={{ marginLeft: spacing.s }}>
          {({ pressed }) => (
            <Send color={pressed ? colors.darkestPlum : colors.darkPlum} />
          )}
        </Pressable>
      </Box>
    </KeyboardAvoidingView>
  );
};
