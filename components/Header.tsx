import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaTwitter } from "react-icons/fa";

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <header className="w-full absolute top-0 px-12 py-4 flex items-center justify-between sm:justify-stretch sm:gap-[6ch]">
        <Link href="/">
          <a><Image src="/header-img.svg" alt="" height={52} width={52} /></a>
        </Link>
        <nav className="hidden sm:flex items-center justify-between grow">
          <p className="space-x-8">
            <LinkTo href='/#home' text="Home" />
            <LinkTo href='/#work' text="Work" />
            <LinkTo href='/#team' text="Team" />
          </p>
          <LinkTo href="/#contact" text="Contact" {...{ className: "border-btn duration-400" }} />
        </nav>
        <button className={`sm:hidden flex flex-col items-center z-50 ${!active && 'space-y-2'}`} onClick={() => setActive(prev => !prev)}>
          <div className={`burger-line ${active && 'rotate-45 duration-400 absolute'}`} />
          <div className={`burger-line ${active && 'hidden opacity-0 duration-400'}`} />
          <div className={`burger-line ${active && '-rotate-45 duration-400'}`} />
        </button>
      </header>
      {active ?
        (
          <div className="sm:hidden fixed top-0 left-0 bg-[#000122] z-10 w-screen h-screen py-[12ch] flex flex-col text-center justify-between" onClick={() => setActive(prev => !prev)}>
            <nav className="flex flex-col items-center space-y-6">
              <LinkTo href='/#home' text="Home" />
              <LinkTo href='/#work' text="Work" />
              <LinkTo href='/#team' text="Team" />
              <LinkTo href="/#contact" text="Contact" {...{ className: "border-btn duration-400" }} />
            </nav>
            <div className="w-full flex justify-center">
              <Link href="https://twitter.com/flowstudio_">
                <a><FaTwitter className="text-[3ch]" /></a>
              </Link>
            </div>
          </div>
        ) : null}
    </>
  )
}

const LinkTo = ({ href, text, ...props }: { href: string, text: string }) => (
  <Link href={href}>
    <a className="hover:text-neutral-200" {...props}>{text}</a>
  </Link >
)