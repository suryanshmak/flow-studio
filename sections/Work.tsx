import React, { useEffect, useRef } from "react";
import { HorizontalScroll } from "../components/HorizontalScroll";

export const Work = () => {
  const workImgs = ["/work/img1.svg", "/work/img2.svg", "/work/img3.svg", "/work/img4.svg", "/work/img5.svg"];

  return (
    <div className="py-8">
      <HorizontalScroll>
        {workImgs.map((src, idx) => (
          <img key={`${idx}`} src={src} alt="" draggable={false} className="rounded-sm w-[360px] h-[200px] md:w-[420px] md:h-[280px] lg:w-[460px] xl:w-[520px] lg:h-[360px] object-cover" />
        ))}
      </HorizontalScroll>
    </div>
  )
}