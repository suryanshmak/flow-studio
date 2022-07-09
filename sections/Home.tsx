import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export const Home = () => (
  <div className='flex'>
    <div className='space-y-10'>
      <h1 className='header'>
        meet the new <span className='gradient-text'>digital</span> <br />
        age.
      </h1>
      <p className='para lg:leading-[2.7rem]'>
        Say 👋 to Flow Studio, intentionally creating & designing <br /> unique experiences for our customers.
      </p>
      <div className='flex items-center space-x-8'>
        <button className='border-btn duration-400'>Order now</button>
        <Link href="https://discord.gg/E35daknsfh">
          <a><FaDiscord className='text-[3ch]' /></a>
        </Link>
      </div>
    </div>
    <div>
      <img src="/flow-studio.svg" alt="" className='absolute h-[400px] right-[-16ch]' />
    </div>
  </div>
)