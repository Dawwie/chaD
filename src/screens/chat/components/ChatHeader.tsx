import React from "react";

import Phone from "@/assets/icons/phone.svg";
import Videocall from "@/assets/icons/videocall.svg";
import { Avatar } from "@/components/Avatar";
import { Header } from "@/components/Header";
import { Text, Box } from "@/utils/theme";

interface ChatHeaderProps {
  username?: string;
  isActive?: boolean;
}

export const ChatHeader = ({
  username = "Anonymous",
  isActive,
}: ChatHeaderProps) => (
  <Header isBackButton>
    <Box flex={1} flexDirection="row" columnGap="s">
      <Avatar size="m" />
      <Box flex={1} overflow="hidden" width="70%">
        <Text
          fontFamily="Poppins-SemiBold"
          lineHeight={21}
          color="darkPlum"
          numberOfLines={1}
        >
          {username}
        </Text>
        <Text variant="bodyText" color="white">
          {isActive ? "Active now" : "Offline"}
        </Text>
      </Box>
    </Box>
    <Box flexDirection="row" columnGap="s">
      <Phone />
      <Videocall />
    </Box>
  </Header>
);
