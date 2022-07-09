import React from "react"

type InputProps = {
  placeholder: string;
  type?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input required={true} ref={ref} {...props} className="input text-md" />
));

TextInput.displayName = "TextInput"