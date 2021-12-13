import { Navbar, Header } from "../../components";
import type { NextPage } from "next";
import events from "./events"
import Head from "next/head"
import { useRouter } from "next/router";

const Events: NextPage = () => {
  const path = useRouter().asPath;
  const event = events.find(e => e.slug === path.split("/")[2]);
  console.log(path);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>{event.title}</title>
      </Head>
      <Navbar />
      <Header title={event.title} />
      <div className="container max-w-screen-lg mx-auto py-6 px-4">
        <div className="">
          <h1 className="text-2xl">{event.description}</h1>
          <h1 className="text-2xl">{event.link}</h1>
          <h1 className="text-2xl">{event.date}</h1>
        </div>
      </div>
    </div>
  );
};

export function getStaticProps(context) {
  return {
    props: {
      // event: events.find(e => e.slug === context.params.slug)
    }
  };
}

export function getStaticPaths() {
  return {
    paths: events.map(e => `/events/${e.slug}`),
    fallback: true
  };
}

export default Events;
