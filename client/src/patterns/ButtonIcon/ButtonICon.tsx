import Icon from '../Icon/Icon';
import './button-icon.scss';

interface Props {
  onClick: () => void;
  iconName: string;
  className: string;
}

const ButtonIcon: React.FC<Props> = ({ onClick, iconName, className = '' }) => {
  return (
    <button
      className={['button-icon', `${className ? className : ''}`].join(' ')}
      onClick={onClick}
    >
      <Icon name={iconName} />
    </button>
  );
};

export default ButtonIcon;
