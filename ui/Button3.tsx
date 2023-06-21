'use client';

import clsx from 'clsx';

interface ButtonProps {
  /**
   * borderless
   */
  borderless?: boolean;
  /**
   * button의 disabled
   */
  disabled?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Button kind
   */
  kind?: 'default' | 'error' | 'ghost';
  /**
   * Optional click handler
   */
  onclick?: () => void;
}

export const Button3 = ({
  borderless = false,
  kind = 'default',
  size = 'medium',
  label,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return (
    <button
      className={clsx(
        'rounded-lg border-2 border-solid px-3 py-1 font-medium disabled:cursor-not-allowed disabled:opacity-25',
        {
          'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
            kind === 'default',
          'bg-vercel-pink text-red-50 hover:bg-pink-600 hover:text-white':
            kind === 'error',
          ' hover:text-white': kind === 'ghost',
          'text-sm': size === 'small',
          'text-md': size === 'medium',
          'text-lg': size === 'large',
          'border-transparent': borderless,
          'border-slate-200': !borderless,
        },
      )}
      {...props}
    >
      {label}
    </button>
  );
};
