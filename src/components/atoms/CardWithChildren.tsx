import { ReactNode, forwardRef } from "react"

export interface CardWithChildrenProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  children: ReactNode
}

export const CardWithChildren = forwardRef<HTMLDivElement, CardWithChildrenProps>(
  ({ title, children, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <div ref={ref} {...props}>
          {children}
        </div>
      </div>
    )
  }
)
