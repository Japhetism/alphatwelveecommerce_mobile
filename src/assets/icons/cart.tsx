import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../types';

const CartIcon: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <Path
        d="M8.625 16H15.888C20.376 16 21.058 13.18 21.886 9.07C22.125 7.883 22.244 7.29 21.957 6.895C21.67 6.5 21.12 6.5 20.019 6.5H6.625"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.625 16L6.004 3.515C5.89585 3.08232 5.64618 2.69821 5.29467 2.4237C4.94316 2.1492 4.50999 2.00007 4.064 2H3.125"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.505 16H9.094C7.73 16 6.625 17.151 6.625 18.571C6.62381 18.6262 6.63349 18.681 6.6535 18.7324C6.67351 18.7838 6.70346 18.8308 6.74162 18.8706C6.77979 18.9105 6.82543 18.9424 6.87594 18.9646C6.92645 18.9868 6.98084 18.9988 7.036 19H18.125"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.125 22C11.9534 22 12.625 21.3284 12.625 20.5C12.625 19.6716 11.9534 19 11.125 19C10.2966 19 9.625 19.6716 9.625 20.5C9.625 21.3284 10.2966 22 11.125 22Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.125 22C18.9534 22 19.625 21.3284 19.625 20.5C19.625 19.6716 18.9534 19 18.125 19C17.2966 19 16.625 19.6716 16.625 20.5C16.625 21.3284 17.2966 22 18.125 22Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CartIcon;
