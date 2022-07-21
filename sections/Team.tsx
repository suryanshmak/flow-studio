import Image from 'next/image'

export const Team = () => {
  const team = [
    { name: 'Jack', role: 'UI designer', src: '/team/jack.png' },
    { name: 'Lenny', role: 'graphic designer', src: '/team/xodus.jpg' },
    { name: 'Kilian', role: 'backend dev', src: '/team/anonymous.png' },
    { name: 'Suryansh', role: 'frontend dev', src: '/team/suryansh.jpg' },
    { name: 'Noah', role: '3D designer', src: '/team/anonymous.png' },
    { name: 'Sahil', role: 'backend dev', src: '/team/sahil.png' },
  ]

  return (
    <div
      className="px-4 pt-[8ch] pb-[6ch] space-y-12"
      style={{
        boxShadow:
          'inset 0 -100px 80px -10px rgba(45, 179, 255, 0.05), inset 0 80px 80px -10px rgba(45, 179, 255, 0.05)',
      }}
    >
      <div className="text-center">
        <p className="uppercase">the super six</p>
        <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.2rem] font-semibold capitalize">
          meet our team
        </h1>
        <p className="sm:text-lg">
          a powerful, communicative team providing top-notch services that bring
          clients back.
        </p>
      </div>
      <div className="grid gap-y-6 container mx-auto grid-rows-default grid-cols-default sm:grid-rows-sm sm:grid-cols-sm">
        {team.map((member, idx) => (
          <div
            className="text-center flex flex-col items-center space-y-4"
            key={`${idx}`}
          >
            <div>
              <img
                src={member.src}
                alt=""
                className="rounded-full w-[98px] h-[98px] sm:w-[126px] sm:h-[126px] object-cover"
              />
            </div>
            <div>
              <p>{member.name}</p>
              <p className="opacity-[0.4] capitalize">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
