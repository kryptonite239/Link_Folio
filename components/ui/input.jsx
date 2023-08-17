import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-1/2 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 border-slate-800 bg-slate-950 ring-offset-slate-950 placeholder:text-slate-400 text-white focus-visible:ring-slate-300 font-semibold placeholder:font-normal",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
