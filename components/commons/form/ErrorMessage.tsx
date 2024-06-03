interface ErrorMessageProps {
  error?: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return error && <p className="text-red-500 text-xs mt-1">{error}</p>;
};

export default ErrorMessage;
