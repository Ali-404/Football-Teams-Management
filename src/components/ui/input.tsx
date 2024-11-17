import * as React from "react"

import { cn } from "@/lib/utils"
interface InputPropsWithIcon extends React.ComponentProps<"input">{
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputPropsWithIcon>(
  ({ className, type, ...props }, ref) => {


    return (
      <div className={props.icon ? "flex items-center justify-center gap-2" : ""}>

        {props.icon}

        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
