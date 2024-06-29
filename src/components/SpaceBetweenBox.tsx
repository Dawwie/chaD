import { ReactNode } from "react";

import { Box } from "@/utils/theme";

interface SpaceBetweenBoxProps {
  children: ReactNode;
}

export const SpaceBetweenBox = ({ children }: SpaceBetweenBoxProps) => {
  return (
    <Box
      flex={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {children}
    </Box>
  );
};
