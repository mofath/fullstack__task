import './error-message.scss'

interface Props {
  error: any;
  name: string;
}

const ErrorMessage: React.FC<Props> = ({ error, name = '' }) => {
  if (!error) return null;

  return (
    <div className='error-message'>
      <div
        className='error-message__text'
        aria-label={name ? `${name} error message` : 'error message'}
      >
        {error.message}
      </div>
    </div>
  );
};

export default ErrorMessage;
