import { Navbar, Header } from "../../components";
import type { NextPage } from "next";
import events from "./events"
import Link from "next/link"

const Events: NextPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Header title="Upcoming Events" />
      <div className="container max-w-screen-lg mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event) => (
            <Link
              key={event.date + event.title}
              href={'/events/' + event.slug}
              passHref
            >
              <div
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
