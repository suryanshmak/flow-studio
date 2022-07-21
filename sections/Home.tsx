import Link from 'next/link'

export const Home = () => (
  <div className="flex flex-col xl:flex-row">
    <div className="space-y-10 lg:basis-[70%]">
      <h1 className="header">
        Meet the New <span className="gradient-text">Digital</span> Age.
      </h1>
      <p className="para lg:leading-[2.7rem]">
        Say 👋 to Flow Studio, intentionally creating & designing unique
        experiences for our customers.
      </p>
      <div className="flex items-center space-x-8">
        <Link href="/#contact">
          <a className="border-btn duration-400">Order now</a>
        </Link>
      </div>
    </div>
    <div className="w-[90%] md:w-[520px] lg:w-[640px] xl:w-[840px] h-[400px] grid place-items-center relative mr-4">
      <video
        src="/flowstudio.mp4"
        autoPlay
        loop
        controls
        playsInline
        className="z-[1] w-full h-full xl:mb-12"
      />
      <img
        src="/flow-studio.svg"
        alt=""
        className="h-[640px] xl:h-[400px] absolute right-[-4ch] top-[-4ch] xl:top-12"
      />
    </div>
  </div>
)
