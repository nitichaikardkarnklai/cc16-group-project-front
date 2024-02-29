import React from 'react';

export default function AllProductIcon({ size = '80px' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 88 88'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1.5'
        y='1.5'
        width='38'
        height='38'
        rx='3.5'
        stroke='#D9D9D9'
        strokeWidth='3'
      />
      <rect
        x='1.5'
        y='48.5'
        width='38'
        height='38'
        rx='3.5'
        stroke='#D9D9D9'
        strokeWidth='3'
      />
      <rect
        x='48.5'
        y='1.5'
        width='38'
        height='38'
        rx='3.5'
        stroke='#D9D9D9'
        strokeWidth='3'
      />
      <rect
        x='48.5'
        y='48.5'
        width='38'
        height='38'
        rx='3.5'
        stroke='#D9D9D9'
        strokeWidth='3'
      />
    </svg>
  );
}
