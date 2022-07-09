import Link from "next/link"
import { useRef } from "react"
import { FaDiscord } from "react-icons/fa"
import { TextInput } from "../components/Input"
import { CustomTextarea } from '../components/Textarea'

export const Contact = () => {
  const emailRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLTextAreaElement>();

  const onFormSubmit = () => {
    console.log(emailRef.current.value, nameRef.current.value, descriptionRef.current.value);
    emailRef.current.value = '';
    nameRef.current.value = '';
    descriptionRef.current.value = '';
  }

  return (
    <div className="container mx-auto py-[8ch] lg:flex lg:justify-between space-y-6 lg:space-y-0">
      <div className="space-y-6">
        <h1 className="header">
          let's work & connect <br />
          <span className="gradient-text">together.</span>
        </h1>
        <p className="para lg:leading-9">We hope we can work together to create any of your <br />
          visions into a reality.
        </p>
        <div className="flex items-center space-x-4">
          <p className="text-lg">or join our discord:</p>
          <Link href="https://discord.gg/E35daknsfh">
            <a>
              <FaDiscord className="text-[3ch]" />
            </a>
          </Link>
        </div>
      </div>
      <div className="space-y-2">
        <p>Email Us:</p>
        <form className="flex flex-col space-y-6 w-full lg:w-[calc(30ch+12vw)]" onSubmit={onFormSubmit}>
          <TextInput {...{ placeholder: "johndoe@example.com", type: "email" }} ref={emailRef} />
          <TextInput {...{ placeholder: "project name" }} ref={nameRef} />
          <CustomTextarea {...{ placeholder: "project description" }} ref={descriptionRef} />
          <button className="border-btn" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}