import React from 'react';

export default function FileIcon({ size = '24px', color = '#3F3F46' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={size}
      widths={size}
      viewBox='0 0 24 24'
      stroke={color}
      strokeWidth='2'
      fill='none'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      />
    </svg>
  );
}
