import { ChangeEvent } from "react";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

interface OptionProps {
  value: any;
  label: string;
}

interface SelectOptionBoxProps {
  label: string;
  options: OptionProps[];
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
  error?: string;
  isRequired?: boolean;
}

const SelectOptionBox = ({
  label,
  options,
  value,
  onChange,
  disabled,
  error,
  isRequired = false,
}: SelectOptionBoxProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <Label label={label} isRequired={isRequired} isError={!!error} />
      <select
        className={`border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none text-sm ${
          disabled
            ? "bg-gray-200 cursor-not-allowed"
            : "focus:border-indigo-500"
        } ${error ? "border-red-500" : ""}`}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      >
        <option key="empty" value="" disabled>
          Choose the options
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage error={error} />
    </div>
  );
};

export default SelectOptionBox;
