import React from "react";

import Phone from "@/assets/icons/phone.svg";
import Videocall from "@/assets/icons/videocall.svg";
import { Avatar } from "@/components/Avatar";
import { Header } from "@/components/Header";
import { SpaceBetweenBox } from "@/components/SpaceBetweenBox";
import { Text, Box } from "@/utils/theme";

interface ChatHeaderProps {
  username: string;
  isActive?: boolean;
}

export const ChatHeader = ({ username, isActive }: ChatHeaderProps) => (
  <Header isBackButton>
    <SpaceBetweenBox>
      <Box flexDirection="row" columnGap="s">
        <Avatar size="m" />
        <Box>
          <Text fontFamily="Poppins-SemiBold" lineHeight={21} color="darkPlum">
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
    </SpaceBetweenBox>
  </Header>
);
