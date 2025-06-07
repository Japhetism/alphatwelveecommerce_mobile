import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../types';

const LeftArrowIcon: React.FC<IconProps> = ({ color = '#64748B', size = 8 }) => {
  const width = (5 / 8) * size;
  const height = size;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 5 8"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <Path
        d="M4.25 0.75L0.75 4L4.25 7.25"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LeftArrowIcon;
