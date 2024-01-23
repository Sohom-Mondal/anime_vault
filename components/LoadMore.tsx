"use client";

import { fetchAnime } from "@/app/action";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard, { AnimeProp } from "./AnimeCard";
import { Loader2 } from "lucide-react";

let page = 2;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp[]>([]);
  useEffect(() => {
    inView
      ? fetchAnime(page).then((res) => {
          setData([...data, ...res]);
          page++;
        })
      : null;
  }, [inView, data]);
  return (
    <>
      <section className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="mt-6 flex justify-center items-center w-full">
        <div ref={ref}>
          <Loader2 className="text-white animate-spin" />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
