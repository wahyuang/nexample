// import Hero from "@/blocks/hero";
import InlineLogo from "@/blocks/inline-logo";
import Newsletter from "@/blocks/newsletter";
import SimpleText from "@/blocks/simple-text";
import Testimonial from "@/blocks/testimonial";
import Layout from "@/components/layout";
import type { NextPage } from "next";

export default function IndexRoute<NextPage>() {
  return (
    <>
      <Layout>
        {/* <Hero /> */}
        <SimpleText />
        <InlineLogo />
        <Testimonial />
        <Newsletter />
      </Layout>
    </>
  );
}
