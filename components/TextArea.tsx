import React from "react"

export const TextArea = React.forwardRef<HTMLTextAreaElement>((props, ref) => (
  <textarea required={true} ref={ref} {...props} className="border-[1px] border-neutral-500 py-3 px-4 bg-[transparent] rounded-lg text-md placeholder-neutral-800 w-full outline-none resizeable-none" />
));