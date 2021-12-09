import './select.scss';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  required?: boolean;
  options: string[];
  onselect: (value: string) => void;
  selected: string;
  label: string;
}

const Select: React.FC<Props> = ({
  name,
  required = true,
  options,
  onselect,
  selected,
  label,
}) => {
  return (
    <div className='select'>
      <label className='select__label' htmlFor={name}>
        {label}
      </label>
      <select
        className='select__field'
        name={name}
        required={required}
        value={selected}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          onselect(event.target.value)
        }
      >
        {options &&
          options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
};

export default Select;
