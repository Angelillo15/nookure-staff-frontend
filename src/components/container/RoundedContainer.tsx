interface RoundedContainerProps {
  children: React.ReactNode;
  color: string;
}

const RoundedContainer = ({ children, color }: RoundedContainerProps) => {
  return (
    <div className={`${color} rounded-3xl p-4`}>
      <div className="m-4">{children}</div>
    </div>
  );
};

export default RoundedContainer;
