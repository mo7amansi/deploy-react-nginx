import React, { useState } from "react";
import { formatPrice } from "../../utils";

/**
 * A custom form range component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the form range.
 * @param {string} props.name - The name attribute for the form range.
 * @param {string} props.size - The size of the form range.
 * @param {number} props.defaultValue - The default value for the form range.
 * @returns {JSX.Element} The rendered FormRange component.
 */
const FormRange = ({ label, name, size, defaultValue }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div className="form-control">
      <label className="cursor-pointer label" htmlFor={name}>
        <span className="capitalize label-text">{label}</span>
        <span className="">{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        className={`range range-secondary ${size}`}
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        defaultValue={defaultValue}
      />
      <div className="flex items-center justify-between px-2 mt-2 text-sm">
        <span className="text-sm font-bold">0</span>
        <span className="text-sm font-bold">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;
