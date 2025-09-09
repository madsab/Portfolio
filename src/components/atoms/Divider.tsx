import { forwardRef } from "react"

export const Divider = forwardRef<HTMLHRElement>((props, ref) => {
  return <hr ref={ref} {...props} className="border-t border-red-900 my-4 w-full" />
})
