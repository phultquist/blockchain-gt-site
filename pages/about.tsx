import { Navbar, Header } from "../components";
import Image from "next/image";
const team: { name: string; bio: string; href?: string; image?: string }[] = [
  {
    name: "Patrick Hultquist",
    bio: "patrick hultquist patrick hultquist patrick hultquist patrick hultquist patrick hultquist ",
  },
  {
    name: "Pruitt Martin",
    bio: "patrick hultquist patrick hultquist patrick hultquist patrick hultquist patrick hultquist ",
  },
  {
    name: "Ronith Yallamanchilli",
    bio: "patrick hultquist patrick hultquist patrick hultquist patrick hultquist patrick hultquist ",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header title="About Us" />
      <div className="content mx-auto max-w-screen-lg py-6 px-4">
        <p className="leading-snug">
          omnis accus eostis ilique inciam, sit utatem archilita veliaerspiet mo
          magnis moluptat odist, tem conem hit, sitatis eossent, aut quodis aut
          ma volene volut verum am ant autem quam
        </p>
        <h1 className="text-3xl text-primary font-bold">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="p-4">
              <div className="flex flex-col">
                <div className="flex-1">
                  <Image
                    src="/vercel.svg"
                    width={200}
                    height={200}
                    className="rounded-full"
                    alt={member.name}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold">{member.name}</h2>
                  <p className="text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
