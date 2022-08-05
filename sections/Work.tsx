import Link from "next/link";
import { HorizontalScroll } from "../components/HorizontalScroll";

export const Work = () => {
  const hrefs = ['https://tunednotify.com/', '/', 'https://daniellefarage.com/', '/', 'https://flipresell.com/'];

  return (
    <div className="py-8 cursor-pointer">
      <HorizontalScroll>
        {hrefs.map((href, idx) => (
          <Link href={href}>
            <img key={idx} src={`/work/img${idx + 1}.png`} alt="" draggable={false} className="rounded-sm w-[360px] md:w-[420px] lg:w-[460px] xl:w-[520px] object-cover" />
          </Link>
        ))}
      </HorizontalScroll>
    </div>
  )
}