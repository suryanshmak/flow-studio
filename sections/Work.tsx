export const Work = () => {
  const workImgs = ["/work/img-1.png", "/work/img-2.png", "/work/img-3.jpg", "/work/img-4.jpg"];

  return (
    <div className="py-16">
      <div className="flex items-center space-x-[8ch] overflow-x-scroll no-scrollbar">
        {workImgs.map((src, idx) => (
          <img key={`${idx}`} src={src} alt="" draggable={false} className="rounded-md w-[520px] h-[360px]" />
        ))}
      </div>
    </div>
  )
}