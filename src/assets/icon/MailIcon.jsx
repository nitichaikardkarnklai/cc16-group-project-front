import React from 'react';

export default function MailIcon({ size = '24px' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22 6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6ZM17.1 6L12 10.08L6.9 6H17.1ZM19 18H5V8.32L11.21 13.32C11.3859 13.4612 11.6044 13.5387 11.83 13.54H12.18C12.4056 13.5387 12.6241 13.4612 12.8 13.32L19 8.32V18Z'
        fill='#333333'
      />
    </svg>
  );
}
