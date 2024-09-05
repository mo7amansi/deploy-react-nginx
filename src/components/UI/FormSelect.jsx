/**
 * A custom select component for forms.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the select element.
 * @param {string} props.defaultValue - The default value of the select element.
 * @param {string} props.size - The size of the select element.
 * @param {Array} props.list - The list of options for the select element.
 * @param {string} props.label - The label for the select element.
 * @returns {JSX.Element} The rendered select component.
 */
const FormSelect = ({ name, defaultValue, size, list, label }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="capitalize label-text">{label}</span>
      </label>

      <select
        defaultValue={defaultValue}
        name={name}
        className="select select-sm select-bordered"
      >
        {list.map((item) => {
          return (
            <option className={size} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
