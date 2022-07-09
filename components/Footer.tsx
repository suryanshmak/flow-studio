import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => (
  <footer className="w-full px-12 py-6 flex items-center justify-between border-t-[1px] border-neutral-800" style={{ boxShadow: 'inset 0 -20px 80px -10px rgba(45, 179, 255, 0.05), inset 0 20px 80px -10px rgba(45, 179, 255, 0.05)' }}>
    <div className="flex items-center gap-6">
      <Image src="/header-img.svg" alt="" height={36} width={36} />
      <span className="hidden sm:block">Flow Studio</span>
    </div>
    <div className="flex items-center gap-4">
      <Link href="https://twitter.com/flowstudio_">
        <a><FaTwitter className="text-[2ch]" /></a>
      </Link>
    </div>
  </footer>
)