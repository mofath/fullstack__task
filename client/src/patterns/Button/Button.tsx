import { FC } from 'react';
import './button.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  size?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const Button: FC<Props> = ({
  children,
  size,
  type,
  onClick,
  fullWidth,
  className,
}) => {
  return (
    <button
      className={[
        'button',
        `button--${size}`,
        `${className && className}`,
        `${fullWidth ? 'button--fullWidth' : ''}`,
      ].join(' ')}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
