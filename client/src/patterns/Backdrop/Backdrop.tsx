import React from 'react';
import './backdrop.scss';

interface Props {
  onClick: () => void,
  show: boolean,
  children: JSX.Element
}

const Backdrop: React.FC<Props> = ({ onClick, show, children }) => {
  return show ? (
    <div className='backdrop' onClick={onClick}>
      {children}
    </div>
  ) : null;
};

export default Backdrop;