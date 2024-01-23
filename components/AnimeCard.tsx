import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { SquareStack, Star } from "lucide-react";

import Image from "next/image";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

function AnimeCard({ anime }: Prop) {
  return (
    <Card className="max-w-sm rounded-lg relative w-full">
      <div className="relative w-full h-[37vh] overflow-hidden">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-t-lg hover:brightness-75 duration-200 delay-75"
        />
      </div>
      <CardContent className="pt-2 flex flex-col gap-3">
        <CardTitle className="line-clamp-1 text-center">{anime.name}</CardTitle>
        <div className="flex justify-center gap-4 items-center">
          <Badge className="capitalize">{anime.kind}</Badge>
          <Badge>
            <SquareStack className="h-4 w-4 mr-2" />
            {anime.episodes || anime.episodes_aired}
          </Badge>
          <Badge>
            <Star className="h-4 w-4 mr-2" />
            {anime.score}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default AnimeCard;
