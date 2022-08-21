import type { NextPage } from "next";
import Head from "next/head";
import { LandingPage } from "../../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Changelog hosting api | Chxngelog</title>
        <meta name="description" content="Changelogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <LandingPage />
      </div>
    </>
  );
};

export default Home;
