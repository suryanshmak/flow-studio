import React, { useEffect, useRef } from "react";
import { HorizontalScroll } from "../components/HorizontalScroll";

export const Work = () => {
  const workImgs = ["/work/img-1.png", "/work/img-2.png", "/work/img-3.jpg", "/work/img-4.jpg"];
  const logos = ["/logos/logo1.svg", '/logos/logo2.svg', '/logos/logo3.svg', '/logos/logo4.svg', '/logos/logo5.svg']

  return (
    <div className="py-8 flex flex-col gap-y-16">
      <HorizontalScroll>
        {workImgs.map((src, idx) => (
          <img key={`${idx}`} src={src} alt="" draggable={false} className="rounded-lg w-[360px] md:w-[420px] lg:w-[460px] xl:w-[520px]" />
        ))}
      </HorizontalScroll>
      <HorizontalScroll>
        {logos.map((src, idx) => (
          <img key={`${idx}`} src={src} alt="" draggable={false} className="rounded-lg w-[360px] md:w-[420px] lg:w-[460px] xl:w-[520px]" />
        ))}
      </HorizontalScroll>
    </div>
  )
}