import { ReactNode } from "react";

interface CardProps {
  title: string;
  children?: ReactNode;
  additionalClass?: string;
}

const Card = ({ title, children, additionalClass }: CardProps) => {
  return (
    <div
      className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ${additionalClass}`}
    >
      <h5 className="mb-2 text-xl font-bold tracking-tight text-indigo-700">
        {title}
      </h5>
      {children}
    </div>
  );
};

export default Card;
