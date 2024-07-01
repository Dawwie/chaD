import { Bubble, BubbleProps, IMessage } from "react-native-gifted-chat";

import { useTheme } from "@/utils/theme";

type ChatBubbleProps = BubbleProps<IMessage>;

export const ChatBubble = ({ ...props }: ChatBubbleProps) => {
  const { colors, borderRadii, fontSize } = useTheme();

  return (
    <Bubble
      {...props}
      textStyle={{
        left: {
          fontFamily: "SF-Compact-Text-Regular",
          fontSize: fontSize.m,
          color: colors.black,
        },
        right: {
          fontFamily: "SF-Compact-Text-Regular",
          fontSize: fontSize.m,
          color: colors.white,
        },
      }}
      wrapperStyle={{
        left: {
          backgroundColor: colors.white,
          borderRadius: borderRadii.l,
          borderBottomLeftRadius: borderRadii.none,
        },
        right: {
          backgroundColor: colors.mediumPlum,
          borderRadius: borderRadii.l,
          borderBottomRightRadius: borderRadii.none,
        },
      }}
    />
  );
};
