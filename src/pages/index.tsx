import Hero from "@/blocks/hero";
import InlineLogo from "@/blocks/inline-logo";
import SimpleText from "@/blocks/simple-text";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <SimpleText />
      <InlineLogo />
    </>
  );
};

export default Home;
