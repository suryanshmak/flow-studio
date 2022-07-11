import React, { useEffect, useRef } from "react";

export const Work = () => {
  const workImgs = ["/work/img-1.png", "/work/img-2.png", "/work/img-3.jpg", "/work/img-4.jpg"];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onWheel: (e: any) => void = (e: React.WheelEvent) => {
      e.preventDefault();

      if (e.deltaX) return;
      if (e.deltaY !== 0) {
        ref.current?.scrollTo({
          left: e.deltaY > 0 ? (ref.current.scrollLeft + e.deltaY + 120) : (ref.current.scrollLeft + e.deltaY - 120),
          behavior: "smooth"
        });
      }
    };

    document.body.addEventListener("wheel", onWheel);
    return () => document.body.removeEventListener("wheel", onWheel);
  }, [])

  return (
    <div className="py-16">
      <div className="px-[8ch] flex items-center space-x-[8ch] overflow-x-scroll no-scrollbar" ref={ref}>
        {workImgs.map((src, idx) => (
          <img key={`${idx}`} src={src} alt="" draggable={false} className="rounded-lg w-[360px] md:w-[420px] lg:w-[460px] xl:w-[520px]" />
        ))}
      </div>
    </div>
  )
}