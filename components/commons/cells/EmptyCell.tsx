interface EmptyCellProps {
  value?: string;
}

const EmptyCell = ({ value }: EmptyCellProps) => {
  return value ? value : "-";
};

export default EmptyCell;
