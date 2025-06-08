import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../types';

const MinusIcon: React.FC<IconProps> = ({ color = '#64748B', size = 20 }) => {
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
        d="M17.5404 10H4.20709"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MinusIcon;
