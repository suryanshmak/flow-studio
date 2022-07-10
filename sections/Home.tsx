import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export const Home = () => (
  <div className='flex flex-col lg:flex-row'>
    <div className='space-y-10 lg:basis-[60%]'>
      <h1 className='header'>
        Meet the New <span className='gradient-text'>Digital</span>{" "}
        Age.
      </h1>
      <p className='para lg:leading-[2.7rem]'>
        Say 👋 to Flow Studio, intentionally creating & designing unique experiences for our customers.
      </p>
      <div className='flex items-center space-x-8'>
        <button className='border-btn duration-400'>Order now</button>
        <Link href="https://discord.gg/E35daknsfh">
          <a><FaDiscord className='text-[3ch]' /></a>
        </Link>
      </div>
    </div>
    <div className="absolute lg:right-[-16ch]">
      <img src="/flow-studio.svg" alt="" className='h-[200px] lg:h-[320px] xl:h-[400px] ' />
    </div>
  </div>
)