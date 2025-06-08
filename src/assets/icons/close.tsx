import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../types';

const CloseIcon: React.FC<IconProps> = ({ color = '#334155', size = 24 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <Path
        d="M17.25 6.75L6.75 17.25"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.75 6.75L17.25 17.25"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CloseIcon;