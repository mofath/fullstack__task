import React from 'react';
import PropTypes from 'prop-types';
import './icon.scss';

import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';
import { ReactComponent as HeartIcon } from '../../../assets/icons/heart.svg';
import { ReactComponent as HeartFilledIcon } from '../../../assets/icons/heart-filled.svg';
import { ReactComponent as StarIcon } from '../../../assets/icons/star.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';
import { ReactComponent as PlusCircleIcon } from '../../../assets/icons/plus-circle.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';

const Icons = {
  close: CloseIcon,
  heart: HeartIcon,
  heartFilled: HeartFilledIcon,
  plus: PlusIcon,
  plusCircle: PlusCircleIcon,
  star: StarIcon,
  user: UserIcon,
};

export default function Icon({ name, ...props }) {
  const IconComponent = Icons[name];

  return (
    <div className='icon' {...props}>
      <IconComponent />
    </div>
  );
}

Icon.propTypes = {
  name: PropTypes.string,
};