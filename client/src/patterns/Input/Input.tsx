import ErrorMessage  from '../ErrorMessage/ErrorMessage';
import './input.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  error: any;
  value: string;
  defaultValue: string;
  handleOnChange: () => void;
}

const TextField: React.FC<Props> = ({
  name,
  type,
  register,
  error,
  placeholder,
  autoComplete,
  value,
  defaultValue,
  handleOnChange,
}) => {
  return (
    <div className='text-field'>
      <input
        aria-label={placeholder || name}
        className='text-field__input'
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={handleOnChange}
        {...(register && { ...register(name) })}
      />
      <ErrorMessage error={error} name={name} />
    </div>
  );
};

export default TextField;
