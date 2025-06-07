import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../types';

const SearchIcon: React.FC<IconProps> = ({ color = '#94A3B8', size = 14 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <Path
        d="M13.0417 13.0417L9.91667 9.91667M0.958334 6.16667C0.958334 3.29019 3.29018 0.958336 6.16667 0.958336C9.04315 0.958336 11.375 3.29019 11.375 6.16667C11.375 9.04315 9.04315 11.375 6.16667 11.375C3.29018 11.375 0.958334 9.04315 0.958334 6.16667Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;