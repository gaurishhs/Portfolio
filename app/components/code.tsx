export const Code = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
      <code
        className={`
          [p_&]:text-sm
          [p_&]:px-1
          [p_&]:py-0.5
          [p_&]:rounded-sm
          max-w-full
          overflow-scroll
        `}
      >
        {children}
      </code>
    );
  };