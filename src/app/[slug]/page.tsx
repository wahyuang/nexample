import BlockGenerator from "@/components/block-generator";
import Layout from "@/components/layout";

import { getPages, getPage } from "@/libs/api";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  const pages = await getPages();

  return pages.data.map((page) => ({
    slug: page.attributes.slug,
  }));
}

async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const dataPage = await getPage(slug);

  // return 404 page if page does not exist
  if (!dataPage.data.length) return notFound();

  const blocks = dataPage.data[0]?.attributes.blocks;

  return <Layout>{blocks?.map((block) => BlockGenerator(block))}</Layout>;
}

export default Page;
