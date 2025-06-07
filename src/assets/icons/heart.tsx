import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../types';

const HeartIcon: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <Path
        d="M19.838 3.99398C17.156 2.34898 14.815 3.01198 13.409 4.06798C12.833 4.50098 12.545 4.71798 12.375 4.71798C12.205 4.71798 11.917 4.50098 11.341 4.06798C9.93501 3.01198 7.59401 2.34898 4.91201 3.99398C1.39301 6.15298 0.597012 13.274 8.71501 19.284C10.261 20.427 11.034 21 12.375 21C13.716 21 14.489 20.428 16.035 19.283C24.153 13.275 23.357 6.15298 19.838 3.99398Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HeartIcon;
