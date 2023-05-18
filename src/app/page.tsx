// import Hero from "@/blocks/hero";
// import InlineLogo from "@/blocks/inline-logo";
// import Newsletter from "@/blocks/newsletter";
// import SimpleText from "@/blocks/simple-text";
// import Testimonial from "@/blocks/testimonial";
import Layout from "@/components/layout";
import type { NextPage } from "next";
import BlockGenerator from "@/components/block-generator";

import { getHomepage } from "@/libs/api";

export default async function IndexRoute<NextPage>() {
  const dataHomepage = await getHomepage();

  const blocks = dataHomepage.data.attributes.blocks;

  return (
    <>
      <Layout>
        {blocks?.map((block) => BlockGenerator(block))}
        {/* <Hero /> */}
        {/* <SimpleText />
        <InlineLogo />
        <Testimonial />
        <Newsletter /> */}
      </Layout>
    </>
  );
}
