import React from "react"

const Input = React.forwardRef<HTMLInputElement>((props, ref) => (
  <input required={true} ref={ref} {...props} className="border-[1px] border-neutral-500 py-3 px-4 bg-[transparent] rounded-lg text-md placeholder-neutral-800 w-full outline-none" />
));

export default Input;