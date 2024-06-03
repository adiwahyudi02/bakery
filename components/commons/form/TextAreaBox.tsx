import { ChangeEvent } from "react";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

interface TextAreaBoxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  isRequired?: boolean;
}

const TextAreaBox = ({
  label,
  value,
  onChange,
  placeholder = "",
  disabled,
  error,
  isRequired = false,
}: TextAreaBoxProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <Label label={label} isRequired={isRequired} isError={!!error} />
      <textarea
        className={`border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none text-sm ${
          disabled
            ? "bg-gray-200 cursor-not-allowed"
            : "focus:border-indigo-500"
        } ${error ? "border-red-500" : ""}`}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

export default TextAreaBox;
