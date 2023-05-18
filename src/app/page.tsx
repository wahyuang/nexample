import { getHomepage } from "@/libs/api";

import Layout from "@/components/layout";
import BlockGenerator from "@/components/block-generator";
import { notFound } from "next/navigation";

export default async function IndexRoute() {
  const dataHomepage = await getHomepage();

  // return 404 page if page does not exist
  if (!dataHomepage.data.length) return notFound();

  const blocks = dataHomepage.data[0]?.attributes.blocks;

  return (
    <>
      <Layout>{blocks?.map((block) => BlockGenerator(block))}</Layout>
    </>
  );
}
