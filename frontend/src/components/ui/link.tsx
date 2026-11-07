import type { ComponentProps } from "react";

export default function Link({
  children,
  className,
  ...rest
} : ComponentProps<"a">) {
  return <a className={`text-primary hover:text-primary/80 underline ${className}`} {...rest} target="_blank">
    {children}
  </a>
}