import React from 'react';

export default function HeartIcon({
  size = '20px',
  stroke = '#3F3F46',
  fill = 'none',
  onClick,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 18'
      fill={fill}
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.34255 3.77795C1.5687 3.23198 1.90017 2.7359 2.31804 2.31804C2.7359 1.90017 3.23198 1.5687 3.77795 1.34255C4.32392 1.1164 4.90909 1 5.50004 1C6.09099 1 6.67616 1.1164 7.22213 1.34255C7.7681 1.5687 8.26417 1.90017 8.68204 2.31804L10 3.63604L11.318 2.31804C12.162 1.47412 13.3066 1.00001 14.5 1.00001C15.6935 1.00001 16.8381 1.47412 17.682 2.31804C18.526 3.16196 19.0001 4.30656 19.0001 5.50004C19.0001 6.69352 18.526 7.83812 17.682 8.68204L10 16.364L2.31804 8.68204C1.90017 8.26417 1.5687 7.7681 1.34255 7.22213C1.1164 6.67616 1 6.09099 1 5.50004C1 4.90909 1.1164 4.32392 1.34255 3.77795Z'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
