import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
// import { getLocales } from "@/lib/getLocales";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

type Props = {
  params: {
    lang: string;
  };
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

// export async function generateStaticParams() {
//   const client = createClient();

//   const pages = await client.getAllByType("page", {
//     lang: "*",
//     filters: [prismic.filter.at("my.page.uid", "home")],
//   });

//   return pages.map((page) => {
//     return {
//       lang: page.lang,
//     };
//   });
// }

export default async function Index({ params: { lang } }: Props) {
  // The client queries content from the Prismic API
  const client = createClient();
  const home = await client.getByUID("page", "home");
  console.log('lang-page',lang)

  // const locales = await getLocales(home, client);

  return (
    <>
      <SliceZone slices={home.data.slices} components={components} />
    </>
  );
}
