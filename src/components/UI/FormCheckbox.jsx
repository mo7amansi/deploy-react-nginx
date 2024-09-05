/**
 * Checkbox form component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name attribute for the checkbox input.
 * @param {string} props.size - The size class for the checkbox input.
 * @param {string} props.label - The label text for the checkbox.
 * @param {boolean} props.defaultValue - The default checked state for the checkbox.
 * @returns {JSX.Element} The rendered checkbox form component.
 */
const FormCheckbox = ({ name, size, label, defaultValue }) => {
  return (
    <div className="flex items-center form-control">
      <label className="cursor-pointer label" htmlFor={name}>
        <span className="capitalize label-text">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-secondary ${size}`}
      />
    </div>
  );
};

export default FormCheckbox;
