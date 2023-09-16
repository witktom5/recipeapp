import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
  const { data: recipes } = api.recipes.getAll.useQuery();
  return (
    <>
      <Head>
        <title>Recipe App</title>
        <meta
          name="description"
          content="App for looking up new cooking recipes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>{recipes?.map((recipe) => `${recipe.title} `)}</div>
      </main>
    </>
  );
}
