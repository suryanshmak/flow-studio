import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="w-full absolute top-0 px-12 py-4 flex items-center gap-[6ch]">
      <Link href="/">
        <a>
          <Image src="/header-img.svg" alt="" height={52} width={52} />
        </a>
      </Link>
      <nav className="hidden sm:flex items-center space-x-8 grow">
        <Link href='/#home'>
          <a className="hover:text-neutral-200">Home</a>
        </Link>
        <Link href='/#work'>
          <a className="hover:text-neutral-200">Work</a>
        </Link>
        <Link href='/#team'>
          <a className="hover:text-neutral-200">Team</a>
        </Link>
      </nav>
      <Link href="/#contact">
        <a className="hidden sm:block border-btn duration-400">Contact</a>
      </Link>
    </header>
  )
}