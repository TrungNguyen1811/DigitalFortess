import { cn } from "@/lib/utils"
import React from "react"

export type InputProps = {icon?: string} & React.InputHTMLAttributes<HTMLInputElement>
const Input = React.forwardRef<HTMLInputElement, InputProps>(({className, type, icon, ...props}, ref) => {
    return (
        <div className={cn('w-full flex items-center', className)}>
              {icon && <img src={icon} alt={`${props.placeholder} icon`} className="mr-2 h-6 w-6" />}
            <input
                type={type}
                className={cn(
                    'flex text-white text-lg w-full bg-transparent pl-1 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                    className,
                )}
                ref={ref}
                {...props}
                />
        </div>
        
    )
})
Input.displayName = "Input"
export {Input}