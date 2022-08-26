import type { NextPage } from "next";
import Head from "next/head";
import { LandingPage } from "../../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Better Changelog Management | chxngelog</title>
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
