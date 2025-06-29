import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../types';

const HomeIcon: React.FC<IconProps> = ({ color = '#FFFFFF', size = 24 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <Path
        d="M7.963 4.762L6.963 5.543C5.447 6.727 4.688 7.319 4.282 8.153C3.875 8.988 3.875 9.952 3.875 11.88V13.972C3.875 17.756 3.875 19.648 5.047 20.824C6.219 22 8.104 22 11.875 22H13.875C17.646 22 19.532 22 20.703 20.824C21.874 19.648 21.875 17.756 21.875 13.971V11.881C21.875 9.952 21.875 8.988 21.468 8.153C21.061 7.319 20.303 6.727 18.787 5.543L17.787 4.763C15.427 2.92 14.247 2 12.875 2C11.503 2 10.323 2.92 7.963 4.762Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;
