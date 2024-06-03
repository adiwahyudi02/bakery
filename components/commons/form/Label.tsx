interface LabelProps {
  label: string;
  isError?: boolean;
  isRequired?: boolean;
}

const Label = ({ label, isError, isRequired = false }: LabelProps) => {
  return (
    <label
      className={`block text-sm ${isError ? "text-red-500" : "text-gray-900"}`}
    >
      {label}
      {isRequired && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
