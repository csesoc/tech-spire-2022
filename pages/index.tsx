import type { NextPage } from "next";
import Head from "next/head";
import Countdown from "../components/countdown"

const Home: NextPage = () => {
  const EVENT_DATE = new Date(2022, 9, 28, 15)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid h-full place-content-center">
        <h1 className="animate-bounce text-4xl font-bold">Hello Next.js!</h1>
        <Countdown targetDate={EVENT_DATE}/>
      </main>
    </>
  );
};

export default Home;
