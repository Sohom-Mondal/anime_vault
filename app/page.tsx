import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";

async function Home() {
  const data = await fetchAnime(1);
  return (
    <main className="mx-auto max-w-2xl bg-slate-900 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-white">
        Explore Anime
      </h2>
      <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
