import Backdrop from '../Backdrop/Backdrop';
import ButtonIcon from '../ButtonIcon/ButtonICon';
import './modal.scss';

interface Props {
    close: () => void;
    show: boolean;
    headline: () => void;
    children: JSX.Element;
}

const Modal: React.FC<Props> = ({ close, show, headline, children }) => (
    <Backdrop show={show} onClick={close}>
        <div onClick={(e) => e.stopPropagation()} className='modal'>
            <div className='modal__inner'>
                <div className='modal__header'>
                    <div className='modal__headline'>{headline}</div>
                    <ButtonIcon
                        onClick={close}
                        className='modal__close'
                        iconName='close'
                    />
                </div>
                <div className='modal__body'>{children}</div>
            </div>
        </div>
    </Backdrop>
);

export default Modal;
