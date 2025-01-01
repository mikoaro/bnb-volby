interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Shell({ children, className, ...props }: ShellProps) {
  return (
    <div className="w-full space-y-6 p-6 pb-16 md:p-8 md:pb-20">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        {children}
      </div>
    </div>
  )
}

