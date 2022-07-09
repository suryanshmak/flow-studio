import Image from "next/image";

export const Team = () => {
  const team = [
    { name: "Jack", role: "UI Designer", src: "/team/jack.png" },
    { name: "Xodus", role: "graphic designer", src: "/team/suryansh.jpg" },
    { name: "Kilian", role: "backend dev", src: "/team/neesh.jpg" },
    { name: "Suryansh", role: "frontend dev", src: "/team/suryansh.jpg" },
    { name: "Noah", role: "3D designer", src: "/team/jack.png" },
    { name: "Kanishq", role: "backend dev", src: "/team/neesh.jpg" }
  ];

  return (
    <div className="pt-[8ch] pb-8 space-y-12" style={{ boxShadow: "inset 0 -100px 80px -10px rgba(45, 179, 255, 0.05), inset 0 80px 80px -10px rgba(45, 179, 255, 0.05)" }}>
      <div className="text-center">
        <p className="uppercase">the super six</p>
        <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.2rem] font-semibold">
          meet our team
        </h1>
        <p className="text-lg">a powerful, communicative team providing top-notch services that bring clients back.</p>
      </div>
      <div className="grid team justify-center">
        {team.map((member, idx) => (
          <div className="text-center space-y-4" key={`${idx}`}>
            <div>
              <Image src={member.src} alt="" height={126} width={126} className="rounded-full" />
            </div>
            <div>
              <p>{member.name}</p>
              <p className="opacity-[0.4]">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}