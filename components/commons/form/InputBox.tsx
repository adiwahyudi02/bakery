import { ChangeEvent } from "react";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

interface InputBoxProps {
  label: string;
  type?: string;
  value: any;
  onChange: (value: any) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  isRequired?: boolean;
}

const InputBox = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  disabled,
  error,
  isRequired = false,
}: InputBoxProps) => {
  return (
    <div className="mb-4">
      <Label label={label} isRequired={isRequired} isError={!!error} />
      <input
        className={`border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none text-sm ${
          disabled
            ? "bg-gray-200 cursor-not-allowed"
            : "focus:border-indigo-500"
        } ${error ? "border-red-500" : ""}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

export default InputBox;
