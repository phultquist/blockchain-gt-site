import { Navbar, Header } from "../../components";
import type { NextPage } from "next";

const events = [
  {
    title: "Blockchain Hackathon",
    date: "2020-03-01",
    description:
      "A hackathon for students to learn about blockchain and blockchain technology.",
    link: "https://www.facebook.com/events/2345678901234567",
  },
  {
    title: "Blockchain Hackathon",
    date: "2020-03-02",
    description:
      "A hackathon for students to learn about blockchain and blockchain technology.",
    link: "https://www.facebook.com/events/2345678901234567",
  },
  {
    title: "Blockchain Hackathon",
    date: "2020-03-03",
    description:
      "A hackathon for students to learn about blockchain and blockchain technology.",
    link: "https://www.facebook.com/events/2345678901234567",
  },
];

const Events: NextPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Header title="Upcoming Events" />
      <div className="container max-w-screen-lg mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event) => (
            <div
              key={event.date + event.title}
              className="group bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
            >
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{event.date}</p>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <a href={event.link} className="text-primary font-semibold">
                Learn More{" "}
                <span className="group-hover:opacity-100 opacity-0 group-hover:translate-x-0 -translate-x-10 transition-all font-light">
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
