import Phone from "@/assets/icons/phone.svg";
import Videocall from "@/assets/icons/videocall.svg";
import { Header } from "@/components/Header";
import {
  ChatScreenNavigationProp,
  ChatScreenRouteProp,
} from "@/navigation/types";
import { Box } from "@/utils/theme";

interface ChatScreenProps {
  route: ChatScreenRouteProp;
  navigation: ChatScreenNavigationProp;
}

export const ChatScreen = ({ route }: ChatScreenProps) => {
  const {
    params: { roomId },
  } = route;
  return (
    <>
      <Header>
        <Box flexDirection="row" columnGap="s">
          <Phone />
          <Videocall />
        </Box>
      </Header>
    </>
  );
};
