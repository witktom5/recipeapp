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
          content="App to help you find new cooking recipes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>{recipes?.map((recipe) => `${recipe.title} `)}</div>
      </main>
    </>
  );
}
