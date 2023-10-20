export const Code = ({ children, ...props }: {
    children: React.ReactNode;
    [key: string]: any;
}) => {
    return (
      <code
        {...props}
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