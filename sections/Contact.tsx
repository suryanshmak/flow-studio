import Link from 'next/link'
import { useRef } from 'react'
import { FaDiscord } from 'react-icons/fa'
import { TextInput } from '../components/TextInput'
import { TextArea } from '../components/TextArea'

export const Contact = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div className="px-6 sm:container sm:mx-auto py-[8ch] lg:flex lg:justify-between space-y-6 lg:space-y-0">
      <div className="space-y-6">
        <h1 className="header">
          Let's Work & Connect <br />
          <span className="gradient-text">Together.</span>
        </h1>
        <p className="para lg:leading-9">
          We hope we can work together to create any of your <br />
          visions into reality.
        </p>
        <div className="flex items-center space-x-4">
          <p className="text-lg capitalize">or join</p>
          <Link href="https://discord.gg/E35daknsfh">
            <a>
              <FaDiscord className="text-[3ch]" />
            </a>
          </Link>
        </div>
      </div>
      <div className="space-y-2">
        <p>Email Us:</p>
        <form
          className="flex flex-col space-y-6 w-full lg:w-[calc(30ch+12vw)]"
          action="https://formsubmit.co/heyflowstudio@gmail.com"
          method="POST"
        >
          <TextInput
            placeholder="johndoe@example.com"
            type="email"
            ref={emailRef}
            {...{ name: 'email' }}
          />
          <TextInput
            placeholder="project name"
            ref={nameRef}
            {...{ name: 'name' }}
          />
          <TextArea
            placeholder="project description"
            ref={descriptionRef}
            {...{ name: 'description' }}
          />
          <input type="hidden" name="_subject" value="Info of my project" />
          <button className="border-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
