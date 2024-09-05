/**
 * A reusable form input component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the input.
 * @param {string} props.type - The type of the input.
 * @param {string} props.name - The name of the input.
 * @param {string} props.defaultValue - The default value of the input.
 * @param {string} props.size - The size of the input.
 * @returns {JSX.Element} The rendered FormInput component.
 */
const FormInput = ({ label, type, name, defaultValue, size }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="capitalize label-text">{label}</span>
      </div>
      <input
        type={type}
        defaultValue={defaultValue}
        name={name}
        className={`input input-bordered ${size}`}
      />
    </label>
  );
};

export default FormInput;
