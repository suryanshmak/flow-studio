import React, {useRef, useEffect} from 'react'

export const HorizontalScroll = ({children}: {children: any}) => {
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
        <div className="px-4 sm:px-[8ch] flex items-center space-x-[8ch] overflow-x-scroll no-scrollbar" ref={ref}>
            {children}
        </div>
    )
}