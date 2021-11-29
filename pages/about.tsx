import { Navbar, Header, Footer } from "../components";
import Image from "next/image";
const team: { name: string; bio: string; href?: string; image?: string }[] = [
  {
    name: "Person 1",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    name: "Person 2",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    name: "Person 3",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    name: "Person 4",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    name: "Person 5",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    name: "Person 6",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

export default function About() {
  return (
    <div className=" bg-gray-50">
      <Navbar />
      <Header title="About Us" />
      <div className="mx-auto max-w-screen-lg py-6 px-4">
        <p className="leading-snug">
          omnis accus eostis ilique inciam, sit utatem archilita veliaerspiet mo
          magnis moluptat odist, tem conem hit, sitatis eossent, aut quodis aut
          ma volene volut verum am ant autem quam
        </p>
        <h1 className="text-3xl text-primary font-bold my-4">Our Team</h1>
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
        <Footer />
      </div>
    </div>
  );
}
