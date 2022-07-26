import React, { useEffect, useRef } from "react";
import { HorizontalScroll } from "../components/HorizontalScroll";

export const Work = () => {
  const workImgs = ["/work/img1.png", "/work/img2.png", "/work/img3.png", "/work/img4.png", "/work/img5.png"];

  return (
    <div className="py-8">
      <HorizontalScroll>
        {workImgs.map((src, idx) => (
          <img key={`${idx}`} src={src} alt="" draggable={false} className="rounded-sm w-[360px] md:w-[420px] lg:w-[460px] xl:w-[520px] object-cover" />
        ))}
      </HorizontalScroll>
    </div>
  )
}