import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../types';

const PlusIcon: React.FC<IconProps> = ({ color = '#334155', size = 20 }) => {
  // Original viewBox is 21x20, so scale width relative to height
  const width = (21 / 20) * size;
  const height = size;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <Path
        d="M10.8738 3.33334V16.6667M4.20715 10H17.5405"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PlusIcon;
