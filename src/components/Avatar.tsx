import { Image } from "expo-image";
import React, { ComponentProps } from "react";

import Profile from "@/assets/icons/profile.svg";
import { Box } from "@/utils/theme";

const IMAGE_TRANSITION_DURATION = 1000;

export const avatarSizes = { s: 24, m: 44, l: 64 };

type AvatarProps = ComponentProps<typeof Box> & {
  src?: string;
  size?: keyof typeof avatarSizes;
};

export type AvatarSize = keyof typeof avatarSizes;

export const Avatar = ({ size = "l", src, ...containerProps }: AvatarProps) => (
  <Box
    overflow="hidden"
    borderRadius="full"
    alignItems="center"
    justifyContent="center"
    width={avatarSizes[size]}
    height={avatarSizes[size]}
    {...containerProps}
  >
    {src ? (
      <Image
        style={{ minWidth: avatarSizes[size], minHeight: avatarSizes[size] }}
        source={{ uri: src }}
        contentFit="cover"
        transition={IMAGE_TRANSITION_DURATION}
      />
    ) : (
      <Profile width={avatarSizes[size]} height={avatarSizes[size]} />
    )}
  </Box>
);
