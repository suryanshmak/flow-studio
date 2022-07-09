import React from "react"

export const TextArea = React.forwardRef<HTMLTextAreaElement, { placeholder: string }>((props, ref) => (
  <textarea required={true} ref={ref} {...props} className="input resize-none text-md" />
));

TextArea.displayName = 'TextArea'