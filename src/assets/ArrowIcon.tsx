import React from 'react';

type Props = { color?: string };

function ArrowIcon({ color }: Props) {
  return (
    <svg
      width="59"
      height="16"
      viewBox="0 0 59 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M58.7194 8.69459C59.103 8.29728 59.0919 7.66421 58.6946 7.2806L52.22 1.02925C51.8227 0.645634 51.1896 0.65674 50.806 1.05405C50.4224 1.45137 50.4335 2.08444 50.8308 2.46805L56.586 8.02481L51.0292 13.78C50.6456 14.1773 50.6567 14.8104 51.0541 15.194C51.4514 15.5776 52.0844 15.5665 52.468 15.1692L58.7194 8.69459ZM1.01754 9.99985L58.0175 8.99985L57.9825 7.00015L0.982459 8.00015L1.01754 9.99985Z"
        fill={color ?? '#11CC77'}
        fillOpacity={color ? '1' : '0.333333'}
      />
    </svg>
  );
}

export default ArrowIcon;