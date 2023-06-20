import clsx from 'clsx';

interface ButtonProps {
  // /**
  //  * Is this the principal call to action on the page?
  //  */
  // primary?: boolean;
  // /**
  //  * What background color to use
  //  */
  // backgroundColor?: string;
  // /**
  //  * How large should the button be?
  //  */
  // size?: 'small' | 'medium' | 'large';
  // /**
  //  * Button contents
  //  */
  // label: string;
  // /**
  //  * Optional click handler
  //  */
  /**
   * kind
   */
  kind?: string;
  /**
   * Optional click handler
   */

  onClick?: () => void;
}

export const Button3 = ({
  kind = 'default',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return (
    <button
      className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
        'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
          kind === 'default',
        'bg-vercel-pink text-red-50 hover:bg-pink-600 hover:text-white':
          kind === 'error',
      })}
      {...props}
    />
  );
};
